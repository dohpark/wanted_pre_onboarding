# wanted_pre_onboarding

create-react-app을 통해 세팅을 했으며, css는 styled-component를 사용했습니다.

## Toggle

### 구현 방법

처음에는 classList .target을 toggle하여 css를 변화하는 방법으로 구현할려 했지만, 이와 같은 방법으로는 slide 애니메이션을 줄 수 없다는 것을 깨닫고 다른 방법을 모색했습니다. `<input>` 태그로 체크박스를 만든 후, 체크 유무에 따라 slider가 움직이는 방법으로 다시 구현했습니다.

## Tab

### 구현 방법

Tab은 Toggle과 비슷한 방법으로 구현했습니다. `<input>` 태그를 활용하여 여러개의 라디오 버튼을 만든 후 셋 모두에게 같은 name을 주어 셋 중 한개만 선택할 수 있도록 했습니다. 그리고 사용자가 라디오를 체크하면 슬라이더가 라디오마다 움직이는 거리에 차이를 두도록 구현했습니다.

## Slider

### 구현 방법

Slider은 `<input>` 태그의 range type을 활용하여 구현했습니다. `<input>` 태그 내의 track과 thumb의 css는 검색해보니 `::-webkit-slider-runnable-track`과 `::-webkit-slider-thumb` 따로 css를 줄 수 있는 방법이 있어 이를 활용했습니다. 0%, 25%, 50%, 75%, 100% 등의 마크는 html 및 css를 통해 트랙에 맞도록 픽셀단위로 하드코딩했습니다. `<input>` 태그에 onInput 이벤트리스너를 활용하여 사용자가 값을 변하면 화면에 현재의 값을 나타나도록 했습니다. 또한, progressBar를 `<input>` 태그에 덧씌워서 마우스 클릭시 `input` 태그가 안 닿는 문제가 있었긴 했지만, 검색해보니 css로 `pointer-events: none;`을 주면 이벤트가 발생되지 않도록 할 수 있다는 것을 보고, progressBar에 이를 적용하여 문제를 해결했었습니다.

## Input

### 구현 방법

onKeyUp 이벤트를 통해 사용자가 email을 작성시 정규표현식(제가 직접 작성하지 않고 블로그에서 복사했습니다)을 통해 해당 이메일이 알맞은지 확인할 수 있도록 했습니다.
비밀번호 노출 유무느 `<input type={passwordType ? "text" : "password"} />` 와 같이 input 태그의 type 속성에 삼항연산자를 활용하여 state에 따라 input 태그의 type 속성이 바뀔 수 있도록 했습니다.

## Dropdown

### 구현 방법

키워드 필터 기능은 data state를 활용했습니다. data는 useState를 사용한 것으로 값이 변함에 따라 화면도 바뀔 수 있도록 했습니다. data는 `<input>` 태그에 작성한 값을 바탕으로 필터링을 적용한 배열입니다.

```js
<ContentList>
  <li onClick={onClickHandler}>All Symbols</li>
  {data.map((value, index) => {
    return (
      <li key={`${value}${index}`} onClick={onClickHandler}>
        {value}
      </li>
    );
  })}
</ContentList>
```
