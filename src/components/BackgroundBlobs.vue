<template>
  <div class="outerWrapper">
    <template v-for="n in 10" :key="n">
      <div class="wrapper" :style="{top: `${(n - 1) * 1350}px`}" :class="`wrapper-${n % 3}`">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="svg-1">
          <path fill="#55CB47" d="M43.6,-65.3C56.6,-59.4,67.3,-47.5,71.9,-33.9C76.6,-20.2,75.1,-4.8,70.4,8.3C65.7,21.4,57.7,32.3,48.7,41.6C39.7,51,29.7,59,16.8,67.5C3.9,76,-11.9,85.1,-27.4,84.6C-42.9,84,-58.1,73.8,-68.3,60.2C-78.4,46.6,-83.4,29.7,-82.9,13.7C-82.3,-2.2,-76.2,-17.1,-68.4,-30C-60.6,-42.9,-51.1,-53.9,-39.5,-60.4C-27.8,-66.9,-13.9,-68.9,0.7,-70C15.3,-71,30.6,-71.2,43.6,-65.3Z" transform="translate(100 100)" />
        </svg>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="svg-2">
          <path fill="#55CB47" d="M44.7,-78.6C56.4,-70.6,63.4,-55.6,67.9,-41.3C72.5,-27.1,74.6,-13.5,77.2,1.5C79.7,16.5,82.6,32.9,77.4,46C72.2,59.1,58.7,68.8,44.5,76.2C30.2,83.7,15.1,89,0.2,88.7C-14.8,88.4,-29.5,82.6,-42.8,74.5C-56,66.4,-67.7,56.1,-74.2,43.4C-80.6,30.6,-81.8,15.3,-81.1,0.4C-80.4,-14.5,-77.8,-28.9,-70.4,-40.2C-63.1,-51.4,-51,-59.5,-38.5,-67C-26,-74.4,-13,-81.3,1.7,-84.3C16.5,-87.3,33,-86.5,44.7,-78.6Z" transform="translate(100 100)" />
        </svg>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="svg-3">
          <path fill="#55CB47" d="M71.2,-35.8C85.1,-17.2,84,15.4,69.7,37.3C55.3,59.2,27.7,70.5,-0.5,70.7C-28.6,71,-57.2,60.3,-71.2,38.6C-85.1,16.9,-84.4,-15.7,-70.1,-34.6C-55.8,-53.5,-27.9,-58.7,0.4,-58.9C28.7,-59.2,57.4,-54.4,71.2,-35.8Z" transform="translate(100 100)" />
        </svg>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="svg-4">
          <path fill="#55CB47" d="M61.2,-61.3C77,-45.5,85.8,-22.7,85.2,-0.5C84.7,21.7,74.8,43.3,59.1,51C43.3,58.8,21.7,52.5,1.2,51.3C-19.2,50.1,-38.5,53.9,-54.4,46.2C-70.3,38.5,-82.8,19.2,-82.8,0.1C-82.7,-19.1,-70,-38.2,-54.1,-54C-38.2,-69.9,-19.1,-82.6,1.8,-84.4C22.7,-86.2,45.5,-77.2,61.2,-61.3Z" transform="translate(100 100)" />
        </svg>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BackgroundBlobs',
}
</script>

<style scoped lang="scss">
@import '@/styles/imports.scss';

.outerWrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: none;
  @include  m {
    display: block;
  }
}

.wrapper {
  position: absolute;
  left: 50%;
  opacity: 0.25;
  width: 100%;
  display: none;
  height: 1350px;

  padding: 0px 10px;
  max-width: 600px;
  margin: 0 auto;
  transform: translateX(-50%);
  z-index: -1;
  @include m {
    display: block;
    max-width: 1200px;
    padding: 0 20px;
  }
  @include xl {
    max-width: 1600px;
  }
  &-2 {
    transform: translateX(-50%) scaleX(-1) rotate(270deg);
  }
  &-0 {
    transform: translateX(-50%) scaleX(-1) rotate(90deg);
  }

}



.svg-1 {
  position: absolute;
  width: 800px;
  left: -300px;
  top: -200px;
}

.svg-2 {
  position: absolute;
  width: 600px;
  right: -250px;
  top: 400px;
}

.svg-3 {
  position: absolute;
  width: 150px;
  top: -95px;
  right: -175px;
}

.svg-4 {
  position: absolute;
  width: 150px;
  top: 800px;
}
</style>