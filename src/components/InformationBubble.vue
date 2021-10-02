<template>
<span class="iconContainer">
  <i class="far fa-question-circle icon"></i>
  <div class="popupBody">
    {{information}}
  </div>
</span>

</template>

<script>
const information = {
  albumsWithDifferentMarkets: 'Albums brought out to different marks are counted separately, and may appear more often.',
  topTracks: 'These top tracks are based on The Netherlands.'
}


export default {
name: 'InformationBubble',
props: ['type'],
computed: {
  information(){
    return information[this.type]
  }
}
}
</script>

<style scoped lang='scss'>
@import '@/styles/imports.scss';
.iconContainer {
  position: relative;
  &:hover {
    cursor: pointer;
    .popupBody{
      display: block;
    }
  }
}

.icon {
  color: var(--color-green);
}

.popupBody {
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  border-radius: 25px;
  background-color: var(--color-green);
  color: var(--color-white);
  min-width: 225px;
  font-size: 12px;
  z-index: 10;
  padding: 10px 20px;
  box-shadow: 0px 0px 10px var(--color-black);
  font-weight: 300;
  @include m {
    min-width: 350px;
    font-size:14px;
  }
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%) translateY(-100%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent var(--color-green) transparent;
  }
}
</style>