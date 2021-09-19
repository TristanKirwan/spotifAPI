<template>
  <div class="playlist">
    <i class="fas fa-list-ol cardIcon"></i>
    <div class="playlistInfoContainer">
      <span class="title">{{title}}</span>
      <span class="owner">
        <i class="fas fa-users cardIcon" v-if="isCollaborative"></i>
        <i class="fas fa-user cardIcon" v-else></i>
        {{owner}}
      </span>
    </div>
    <span class="amountSongs">
      <i class="fas fa-music cardIcon"></i> {{amountSongs}}
    </span>
  </div>
</template>

<script>
export default {
name: 'PlaylistCard',
props: ['data'],
data(){
  return {
    title: this.data.name || '',
    amountSongs: this.data.tracks.total || 0,
    isCollaborative: this.data.collaborative || false,
    owner: this.data.owner.display_name || ''
  }
}
}
</script>

<style scoped lang='scss'>
.playlist {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-gap: 20px;
  align-items: center;
  box-shadow: 5px 5px 15px var(--color-grey);
  padding: 5px 10px;
  transform: translateY(0px);
  transition: transform 0.2s;
  background-color: var(--color-white);
  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
  }
}

.playlistInfoContainer{
  display: grid;
}

.cardIcon {
  color: var(--color-green);
}

.title {
  font-weight: 500;
}

.owner{
  font-weight: 300;
  font-size: 12px;
  font-style: italic;
}

</style>