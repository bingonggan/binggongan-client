<div align="center">
  <img src="https://postfiles.pstatic.net/MjAyNDEwMDlfNjAg/MDAxNzI4NDc5NjEwOTgx.tEDha54I9_NueQAEzZGVyLQ_z5LSrQUuUq0ZiFcXGIwg.OGHa1P3i9DcBmfSkk5lY0aSK8BIh7oiAPd6PqcFV8Oog.PNG/logo.png?type=w966"/>

빈공간은 물건을 포장할 때 포장 상자의 크기와 최적의 배치 방법을 제안하는 상자 포장 시뮬레이터 입니다.

</div>

> 사용자가 포장해야 할 물건들을 선택하면 **상자 크기를 추천**해주고 최대한 **빈공간 없이 효율적으로 배치**되는 모습을 보여줍니다. 이를 통해 사용자는 실제로 물건을 포장할 때 최적의 배치 방법을 알 수 있습니다.

## 목차

<!-- toc -->

- [1. 프로젝트 구현 동기](#1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%ED%98%84-%EB%8F%99%EA%B8%B0)
- [2. 사용한 기술](#2-%EC%82%AC%EC%9A%A9%ED%95%9C-%EA%B8%B0%EC%88%A0)
  - [서버](#%EC%84%9C%EB%B2%84)
  - [클라이언트](#%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8)
  - [배포](#%EB%B0%B0%ED%8F%AC)
- [3. 핵심 기능 구현 과정](#3-%ED%95%B5%EC%8B%AC-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-%EA%B3%BC%EC%A0%95)
  - [3-1 어떻게 상자에 빈 공간 없이 물건들을 포장할 수 있을까?](#3-1-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%83%81%EC%9E%90%EC%97%90-%EB%B9%88-%EA%B3%B5%EA%B0%84-%EC%97%86%EC%9D%B4-%EB%AC%BC%EA%B1%B4%EB%93%A4%EC%9D%84-%ED%8F%AC%EC%9E%A5%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C)
  - [3-2 3D bin packing 알고리즘 적용하기](#3-2-3d-bin-packing-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
  - [3-3 포장 상자 크기 추천하기](#3-3-%ED%8F%AC%EC%9E%A5-%EC%83%81%EC%9E%90-%ED%81%AC%EA%B8%B0-%EC%B6%94%EC%B2%9C%ED%95%98%EA%B8%B0)
    - [사용자에게 유용한 정보 제공하기](#%EC%82%AC%EC%9A%A9%EC%9E%90%EC%97%90%EA%B2%8C-%EC%9C%A0%EC%9A%A9%ED%95%9C-%EC%A0%95%EB%B3%B4-%EC%A0%9C%EA%B3%B5%ED%95%98%EA%B8%B0)
    - [크기 추천 알고리즘](#%ED%81%AC%EA%B8%B0-%EC%B6%94%EC%B2%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
- [4. 사용자 편의성 향상](#4-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%8E%B8%EC%9D%98%EC%84%B1-%ED%96%A5%EC%83%81)
  - [4-1 클릭으로 내 아이템의 위치를 알수있게 해보자](#4-1-%ED%81%B4%EB%A6%AD%EC%9C%BC%EB%A1%9C-%EB%82%B4-%EC%95%84%EC%9D%B4%ED%85%9C%EC%9D%98-%EC%9C%84%EC%B9%98%EB%A5%BC-%EC%95%8C%EC%88%98%EC%9E%88%EA%B2%8C-%ED%95%B4%EB%B3%B4%EC%9E%90)
  - [4-2 다중 상자 포장 지원: 모든 물건을 담아보자](#4-2-%EB%8B%A4%EC%A4%91-%EC%83%81%EC%9E%90-%ED%8F%AC%EC%9E%A5-%EC%A7%80%EC%9B%90-%EB%AA%A8%EB%93%A0-%EB%AC%BC%EA%B1%B4%EC%9D%84-%EB%8B%B4%EC%95%84%EB%B3%B4%EC%9E%90)
- [5. 테스트](#5-%ED%85%8C%EC%8A%A4%ED%8A%B8)
  - [5-1 서버 부하 테스트](#5-1-%EC%84%9C%EB%B2%84-%EB%B6%80%ED%95%98-%ED%85%8C%EC%8A%A4%ED%8A%B8)

<!-- tocstop -->

## 1. 프로젝트 구현 동기

2024년 3월, 직장을 그만두기로 결심한 후, 많은 짐을 택배 상자에 포장하는 과정에서 큰 어려움을 겪었습니다.

물건이 많았지만, 어떤 상자에 어떻게 배치해야 효율적으로 포장할 수 있을지 감이 잡히지 않았죠.

> 물건을 포장하는데 문제를 겪으면서 저와 같은 고민을 하는 사람들에게 도움을 주고 싶다는 생각이 들었고, 그래서 이 프로젝트를 기획하게 되었습니다.

## 2. 사용한 기술

### 서버

| <img src="https://github.com/user-attachments/assets/53b22d3d-fb94-4a04-91c3-372266ac62f8" width="100rem"/> | <img src="https://github.com/user-attachments/assets/5badc25d-2c7a-48dd-996b-4097bc742d41" width="100rem"/> | <img src="https://github.com/user-attachments/assets/5a9b6a2c-3556-45e4-9f07-e32b349ae300" width="100rem"/> |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 프로그래밍 언어                                                                                             | 웹 프레임워크                                                                                               | 테스트 라이브러리                                                                                           |

### 클라이언트

| <img src="https://github.com/user-attachments/assets/c9665541-ed9b-42d9-947a-f329c0a77806" width="100rem"/> | <img src="https://github.com/user-attachments/assets/5525b29f-e046-4b97-811e-69494c2799b3" width="100rem" /> | <img src="https://github.com/user-attachments/assets/0e6f4066-9d6c-4ce2-adb2-40d51bf33efc" width="100rem" /> |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| 프로그래밍 언어                                                                                             | UI                                                                                                           | 전역 상태관리                                                                                                |
| <img src="https://github.com/user-attachments/assets/82953cd7-77ef-4184-8542-fab8d7f2b01b" width="100rem"/> | <img src="https://github.com/user-attachments/assets/814da0fa-060e-42e3-881f-ec92761e3bec" width="100rem"/>  | <img src="https://github.com/user-attachments/assets/d73d02fd-9fe9-4397-9097-ecb5bf19edbf" width="100rem"/>  |
| 3D 렌더링                                                                                                   | 스타일링                                                                                                     | 빌드 도구                                                                                                    |

### 배포

| <img src="https://github.com/user-attachments/assets/f4693ec3-22f2-4f88-ab93-dbdeab7bf8f3" width="100rem"/> | <img src="https://github.com/user-attachments/assets/1b39c024-4aa8-4183-9a25-92d72e823016" width="100rem"/> |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 서버                                                                                                        | 클라이언트                                                                                                  |

## 3. 핵심 기능 구현 과정

> 이 프로젝트의 핵심 기능은 물건들을 **빈공간 없이 효율적으로 포장**하고 **포장 상자의 크기를 추천하는 것**입니다.

### 3-1 어떻게 상자에 빈 공간 없이 물건들을 포장할 수 있을까?

물건을 빈 공간 없이 효율적으로 포장하는 문제는 3D Bin Packing Problem (3D BPP)으로 불리며, 최적의 결과값을 찾는 것이 매우 복잡한 **NP-hard 문제**로 정의됩니다. 이 문제를 해결하기 위해 **3D bin packing 알고리즘**을 사용했습니다.

**3D bin packing 알고리즘**은 크기, 모양, 무게가 다른 물체를 제한된 수의 3차원 컨테이너(빈)에 포장할 때, 공간 활용을 극대화하고 빈 공간을 최소화하기 위한 최적화 알고리즘입니다. 앞서 설명드린것 처럼 3D BPP는 NP-hard 문제 이기 때문에 주로 물체들을 부피에 따라 정렬하고 하나씩 배치해보는 **휴리스틱 기법**을 통해 구현됩니다.

프로젝트 구현을 위해 같은 기준을 바탕으로 알고리즘을 선정하였습니다:

- **무게 가중치**: 무거운 물건을 바닥에 배치하는 것이 중요하기 때문에, 알고리즘이 물건의 무게를 고려할 수 있어야 합니다.
- **물건 회전**: 물건을 효율적으로 배치하기 위해 회전 가능 여부도 필수 조건입니다.

|             | jerry800416      | luisgarciar         | Online-3D-BPP-PCT    | skjolber           | 3d-bin-packing |
| ----------- | ---------------- | ------------------- | -------------------- | ------------------ | -------------- |
| 회전        | **O**            | X                   | O                    | X                  | X              |
| 무게 가중치 | **O**            | X                   | X                    | O                  | X              |
| 사용 언어   | 파이썬           | 파이썬              | 파이썬               | 자바               | 자바스크립트   |
| 비고        | 실린더 형태 가능 | OpenAI Gym API 사용 | 물건크기 입력 불가능 | three.js 예제 구현 | npm 라이브러리 |

이 기준을 바탕으로 몇 가지 알고리즘을 검토한 결과, **jerry800416** 알고리즘을 선택했습니다. jerry800416 알고리즘은 물건의 무게 가중치를 고려할 수 있을 뿐만 아니라, 물건의 **회전이 가능**하고, **실린더 형태의 물건도 처리**할 수 있습니다.

비교한 다른 알고리즘들은 각각의 장단점이 있었지만, 회전 기능이 없거나 무게 가중치를 고려하지 않는 등의 이유로 이 프로젝트의 요구사항을 충족하지 못했습니다.

### 3-2 3D bin packing 알고리즘 적용하기

**jerry800416** 알고리즘은 논문을 토대로 구현되어 있습니다. 논문에는 알고리즘의 구현 방식과 알고리즘을 통해 얻을 수 있는 데이터가 명시되어 있는데요. 얻을 수 있는 데이터는 다음과 같습니다:

- 물건들의 포지션 [x축, y축, z축]
- 물건들의 회전 타입 (0~5)

물건을 정확하게 배치하기 위해 회전 타입에 대한 정의를 명확히 할 필요가 있었고, 해당 정의는 논문의 Fig.1에 명시되어 있었습니다.

<div align="center">
  <img src="https://postfiles.pstatic.net/MjAyNDEwMDlfMjU3/MDAxNzI4NDc5NjEwOTc4.5zy8wA3sh-hU6QytDw0E0IM_sRWhSCHL8bcifukeO4gg.vexFN_EtGZa8V7K8mxXhhkVHAvLmpQFh1g7G4JfGVQMg.PNG/%ED%9A%8C%EC%A0%84%ED%83%80%EC%9E%85_%EC%A0%95%EC%9D%98.png?type=w966" width="300rem"/>

_출처: OPTIMIZING THREE-DIMENSIONAL BIN PACKING THROUGH SIMULATION(2006)_

</div>

각 타입에 대한 설명은 다음과 같습니다.
|타입|회전|
|--|--|
|타입0|회전하지 않음|
|타입1|z축으로 90도 회전|
|타입2|y축으로 90도 회전|
|타입3|x축으로 90도 회전 후 y축으로 90도 회전|
|타입4|x축으로 90도 회전|
|타입5|x축으로 90도 회전 후 z축으로 90도 회전|

> 여기서 중요한점은 **물건을 회전시키면 포지션이 달라지기 때문에 포지션을 재조정**해야 한다는 것입니다.

예를들어 타입 1의 경우 z축으로 90도 회전하면 물건의 포지션이 변경되므로 x축 좌표에 물건의 높이(h)만큼 더해줘야 물건이 원점에 정확히 위치하게 됩니다.

<div align="center">
  <img src="https://github.com/user-attachments/assets/7a54d492-deba-45c3-8fef-a9dc2b913d6a" width="500rem"/>

_z축으로 90도 회전 시키고_

</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/ec8d61e3-3cfb-43e8-8f86-63a2bac189d3" width="500rem"/>

_x축 좌표에 물건의 높이(h)만큼 더합니다._

</div>

이처럼 각 회전 타입에 따라 물건의 포지션과 로테이션 값을 재조정하는 표를 작성하였습니다.

| 회전 타입 | 포지션(x, y, z) | 로테이션(x, y, z) |
| --------- | --------------- | ----------------- |
| 0         | [0, 0, 0]       | [0, 0, 0]         |
| 1         | [h, 0, 0]       | [0, 0, 90]        |
| 2         | [0, d, w]       | [90, 0, -90]      |
| 3         | [0, 0, w]       | [0, 90, 0]        |
| 4         | [0, 0, 0]       | [0, 90, 90]       |
| 5         | [0, d, 0]       | [90, 0, 0]        |

표를 코드로 구현하여 원하는 위치에 물건을 배치할 수 있었습니다.

```javascript
function calculateRotationType(rotationType) {
  const rotation = Math.PI / 2;

  switch (rotationType) {
    case 0:
      return [0, 0, 0];
    case 1:
      return [0, 0, rotation];
    case 2:
      return [rotation, 0, -rotation];
    case 3:
      return [0, rotation, 0];
    case 4:
      return [0, rotation, rotation];
    case 5:
      return [rotation, 0, 0];
  }
}
```

### 3-3 포장 상자 크기 추천하기

#### 사용자에게 유용한 정보 제공하기

포장 상자 크기를 추천하기 위해 **우체국상자**의 크기를 참고하였습니다.

우체국 상자는 실제로 포장할 때 가장 많이 사용하는 상자이며 주변에서 쉽게 구할 수 있고, 크기 정보 또한 쉽게 얻을 수 있기 때문에 사용자에게 유용한 정보가 될 것이라고 판단했습니다.

#### 크기 추천 알고리즘

크기 추천을 위해 가장 작은 1호 상자부터 물건을 포장해보고, 실패할 경우 다음 크기의 상자로 포장 시도를 반복하여 6호 상자까지 진행합니다. 만약 6호 상자에서도 포장이 안 되면, 포장이 불가능하다는 결과를 반환하는 재귀 로직을 작성했습니다.

## 4. 사용자 편의성 향상

### 4-1 클릭으로 내 아이템의 위치를 알수있게 해보자

사용자가 시뮬레이터 결과를 보고 실제로 물건들을 포장하기 위해선 등록한 물건이 어디에 배치되었는지 알아야 합니다.

그러나 구현된 프로젝트에선 **내 아이템**이 **어디에 배치**되었는지 알 수 없었습니다.

<div align="center">
  <img src="https://github.com/user-attachments/assets/3fcf3a3b-0d17-48bb-975c-b657a80e0f4c" width="500rem"/>

_내 아이템이 어디에 배치되어 있는지 알 수 없다._

</div>

문제점을 개선하기 위해 **내 아이템을 누르면 3D 모델의 색이 변경** 되도록 하였는데요.

모델의 색이 한 번 바뀌고 나서 다시 원래 색으로 돌아오지 않는 문제를 해결하기 위해, 처음에 모델을 불러올 때 원래 색 정보를 **userData**에 저장했습니다. 그 후, 사용자가 특정 아이템을 클릭했을 때, 그 아이템과 같은 순번에 있는 모델의 색을 바꾸고, 다른 모델들은 원래 재질로 돌아가게 만들었습니다.

```javascript
{
  modelList.map((model, index) => {
    model.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (!child.userData.originalMaterial) {
          child.userData.originalMaterial = child.material.clone();
        }

        if (model.originalIndex == activeIndex) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x00ff00,
          });
        } else {
          child.material = child.userData.originalMaterial;
        }
      }
    });
  });
}
```

<div align="center">
  <img src="https://github.com/user-attachments/assets/54d9a7bc-488a-4afe-ac42-6382edfcbc3b" width="500rem"/>

_내 아이템을 클릭하면 3D모델의 색이 변경됩니다._

</div>

### 4-2 다중 상자 포장 지원: 모든 물건을 담아보자

프로젝트를 배포하고 가장 많이 받은 피드백은 **여러 상자에 물건을 포장할 수 없나요?** 였습니다.

기존의 상자 크기 추천 알고리즘은 물건들이 우체국 6호 상자에도 포장되지 않으면 **포장되지 않았습니다.** 라는 메세지를 반환하게 되어있습니다.

사용자 입장에서 포장해야 할 물건들을 열심히 담았는데 결과가 **포장되지 않았다** 는것은 UX관점에서 치명적인 문제였고, 이를 개선하기 위해 기존의 상자 크기 추천 알고리즘을 아래와 같이 변경하였습니다.

<div align="center">
  <img src="https://github.com/user-attachments/assets/0fa00e76-93f6-4876-a454-e1c04305e850" width="600rem"/>

</div>

알고리즘 변경 후 여러 상자에 물건을 포장할 수 있게 수정되었습니다.

<div align="center">
  <img src="https://github.com/user-attachments/assets/5ba1b292-1b36-479d-99b1-060f60b6fd62" width="500rem"/>

_여러 상자에 모든 물건들을 포장할 수 있게 되었습니다._

</div>

## 5. 테스트

### 5-1 서버 부하 테스트

상자 크기 추천 알고리즘의 시간복잡도는 상자 개수를 m, 물건 개수를 n이라고 할 때 `O(m * n * log n)`입니다.
상자 개수는 물건 개수에 비례하기 때문에 `m = k * n (k는 상수)` 으로 표현할 수 있으며, 결과적으로 `O(n^2 * log n)`으로 간략화 됩니다.

물건의 개수가 증가함에 따라 연산이 기하급수적으로 증가하므로, 물건 개수를 제한할 필요가 있었습니다. 이를 위한 기준을 설정하기 위해 서버 부하 테스트를 진행하였습니다.

서버 부하 테스트는 다음과 같이 진행되었습니다:

- 최대 10명의 사용자가 동시에 POST 요청을 보냈을 때, RPS(Requests Per Second)와 평균 응답 시간을 비교했습니다.
- 물건의 부피는 길이 200 \* 너비 200 \* 높이 200으로 설정하였습니다.
- 물건의 개수를 10개, 15개, 20개씩 증가시키며 약 1분간 테스트를 수행했습니다.

테스트 결과는 다음과 같습니다:

<div align="center">
  <img src="https://github.com/user-attachments/assets/dd4394fb-bf7a-4243-bd4d-f3d316d02db9" width="500rem"/>

_물건 10개 테스트 결과_

</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/f4200aff-55de-49d1-8f2b-b61fa1745f49" width="500rem"/>

_물건 15개 테스트 결과_

</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/5f8c47b9-4d18-4c5c-8247-c503201348e8" width="500rem"/>

_물건 20개 테스트 결과_

</div>

| 물건 개수 | RPS  | 평균 응답 시간(ms) |
| --------- | ---- | ------------------ |
| 10개      | 18.5 | 506.51             |
| 15개      | 6.03 | 1532.76            |
| 20개      | 1.49 | 5934.42            |

> 서버 부하 테스트 결과, 물건 개수가 20개로 증가할 경우 응답 시간이 급격히 증가하고 초당 요청 수가 현저히 떨어지기 때문에, 사용자 경험을 고려하여 물건 개수를 **15개로 제한**하는 것으로 결정했습니다.
