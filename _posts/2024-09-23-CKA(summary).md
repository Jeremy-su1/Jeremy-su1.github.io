---
layout: single
title: "CKA Certification"
categories: Devops
tag: [CKA, CKAD]
toc: true
Typora-root-url: ../
author_profile: false
sidebar:
  nav: "docs"
search: true
---

# CKA
## ETCD
  - key:value 형태의 데이터 스토리지
  - k8s cluster의 정보를 저장해서 사용
  - 모든 etcd 데이터는 etcd DB file에 보관 : /var/lib/etcd
  - etcd 관리 명령 : etcdctl
  - etcdctl 설치 확인
    ```
    ETCD를 호스팅 할 시스템에 ssh 로그인
    $ ssh k8s-master
    $ etcd --version
    $ etcdctl version
    ```

  - Backup & Restore
    - master의 장애와 같은 예기치 못한 사고로 인해 ETCD DB가 유실될 경우를 대비해서 Backup API를 제공
      - ETCD snapshot : control-plane(master) -> etcdctl snapshot save <snapshot filename>
      - ETCD restore : Snapshot으로 저장한 DB파일을 동작 중인 etcd에 적용하여 snapshot 생성 시점으로 되돌리기
        - 단계 1) snapshot 파일을 DB 파일로 복원
        - 단계 2) 동작 중인 etcd Pod의 구성정보를 복원된 DB위치로 수정 적용
        - $ etdctl snapshot restore <snapshot filename>
    
    - ETCD Backup
    [K8s backup](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#backing-up-an-etcd-cluster)
    ```
    trusted-ca-file 확인
    $ ps -ef | grep kube | grep trusted-ca-file
    cert-file 확인
    $ ps -ef | grep kube | grep cert-file
    key-file 확인
    $ ps –ef | grep kube | grep key-file
    $ sudo ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \
    --cacert=/etc/kubernetes/pki/etcd/ca.crt \
    --cert=/etc/kubernetes/pki/etcd/server.crt \
    --key=/etc/kubernetes/pki/etcd/server.key \
    snapshot save /tmp/etcd-backup
    ```
    - 현재 etcd 상태를 수정 하고 snapshot 파일을 이용해 복원했을 때 원래대로 복원되었는지 확인
    ```
    $ kubectl get pods
    $ kubectl delete deployment XXXXX
    $ kubectl get pods
    ```
    - ETCD Restore
    [K8s restore](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#restoring-an-etcd-cluster)
    ```
    $ sudo ETCDCTL_API=3 etcdctl --data-dir=/var/lib/etcd-new snapshot restore
    /tmp/etcd-backup
    $ sudo tree /var/lib/etcd-new/
    ```

    - etcd Pod에 복원된 etcd-data 위치를 적용하고 Pod 다시 시작
    
    ```
    $ sudo vi /etc/kubernetes/manifests/etcd.yaml
    ---
    - hostPath:
    path: /var/lib/etcd-new
    type: DirectoryOrCreate
    name: etcd-data

    #docker 명령으로 etcd가 restart 되었는지 확인
    $ sudo docker ps -a | grep etcd
    # 복원되었는지 확인
    $ kubectl get pods
    ```
