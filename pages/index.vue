<template>
  <div>
    <NavBar />
    <div class="bg-white" style="display: flex; justify-content: center">
      <nav
        class="flex flex-col sm:flex-row"
        style=""
        v-for="(tabButton, index) in tabButtons"
        :key="index"
      >
        <button
          @click="setActiveTab($event, tabButton.text)"
          class="
            py-4
            px-6
            block
            hover:text-blue-500
            focus:outline-none
            font-bold
          "
          :class="{
            'text-blue-500 border-blue-500': isActive,
          }"
        >
          {{ tabButton.text }}
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
      tabButtons: [
        { text: 'Home' },
        { text: 'Discover' },
        { text: 'Video' },
        { text: ' Leaderboard' },
        { text: '  Challenges' },
      ],

      activeClasse: 'text-blue-500 border-blue-500',
      active: false,
      query: 'Home',
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
    setActiveTab(event, text) {
      // TODO
      // this.isActive = event.target.innerText == text
      this.query = text
      console.log(event.target.classList.add('border-blue-500'))
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
