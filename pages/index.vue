<template>
  <div>
    <NavBar />
    <div class="bg-white" style="display: flex; justify-content: center">
      <nav class="flex flex-col sm:flex-row" style="">
        <button
          @click="setActiveTab($event, 'Home')"
          class="
            py-4
            px-6
            block
            hover:text-blue-500
            focus:outline-none
            border-b-2
            font-bold
          "
          :class="{
            'text-blue-500 border-blue-500': isActive,
          }"
        >
          Home</button
        ><button
          class="
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
    <Photos :query="query" />
  </div>
</template>

<script>
import HomeLayout from '../layouts/default.vue'
import Photos from '@/components/Photos.vue'

export default {
  components: {
    HomeLayout,
    Photos,
  },

  data() {
    return {
      items: [],
      navItems: [
        {
          text: 'xxxxx',
        },
      ],
      activeClasse: 'text-blue-500 border-blue-500',
      active: false,
      query: 'Cars',
    }
  },
  computed: {
    isActive: {
      get() {
        return this.active
      },
      set(val) {
        this.active = val
      },
    },
  },
  methods: {
    setActiveTab(e, text) {
      // TODO
      this.isActive = true
      this.query = text
      console.log(e.target.innerHTML, text)
    },
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
