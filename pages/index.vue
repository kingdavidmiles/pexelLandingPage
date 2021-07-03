<template>
  <div>
    <NavBar />
    <div class="bg-white" style="display: flex; justify-content: center">
      <nav class="flex flex-col sm:flex-row" style="">
        <button
          class="
            text-gray-600
            py-4
            px-6
            block
            hover:text-blue-500
            focus:outline-none
            text-blue-500
            border-b-2 border-blue-500
            font-bold
          "
        >
          Home</button
        ><button
          class="
            text-gray-600
            py-4
            px-6
            block
            hover:text-blue-500
            focus:outline-none
            font-bold
          "
        >
          Discover</button
        ><button
          class="
            text-gray-600
            py-4
            px-6
            block
            hover:text-blue-500
            focus:outline-none
            font-bold
          "
        >
          Videos</button
        ><button
          class="
            text-gray-600
            py-4
            px-6
            block
            hover:text-blue-500
            focus:outline-none
            font-bold
          "
        >
          Leaderboard
        </button>
        <button
          class="
            text-gray-600
            py-4
            px-6
            block
            hover:text-blue-500
            focus:outline-none
            font-bold
          "
        >
          Challenges
        </button>
      </nav>
    </div>
    <!--  -->
    <div class="md:px-2 md:mx-2 md:py-10 lg:px-10 lg:mx-20">
      <div class="flex flex-wrap mx-2 overflow-hidden">
        <div
          class="
            my-2
            px-2
            w-full
            sm:w-full
            md:w-1/3
            lg:w-1/3
            overflow-hidden
            panel panel-default
          "
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="row">
            <img :src="item.image" class="photo-item__img photos__column" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeLayout from '../layouts/default.vue'
export default {
  components: {
    HomeLayout,
  },

  data() {
    return {
      items: [
        { image: '/image/one.jpeg' },
        { image: '/image/two.jpeg' },
        { image: '/image/three.jpeg' },
        { image: '/image/four.jpeg' },
        { image: '/image/one.jpeg' },
        { image: '/image/five.jpeg' },
        { image: '/image/six.jpeg' },
        { image: '/image/seven.jpeg' },
        { image: '/image/nine.jpeg' },
        { image: '/image/eleven.jpeg' },
        { image: '/image/nine.jpeg' },
        { image: '/image/twelve.jpeg' },
      ],
    }
  },
}
</script>

<style scoped>
.panel {
  height: 100%;
}

.photos__column {
  display: block;
  flex-basis: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  margin-right: 1.45rem;
}
</style>
