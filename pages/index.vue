<template>
  <div>
    <NavBar />

    <!-- content listing on homepage -->
    <div class="flex justify-center shadow-md overflow-x-auto">
      <nav
        class="bg-white pt-2"
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
            text-gray-600
          "
          :class="{
            'text-blue-500 border-blue-500': isActive,
          }"
        >
          {{ tabButton.text }}
        </button>
      </nav>
    </div>
    <!-- End here -->
    <br />
    <!-- photos  -->
    <Photos :query="query" />
    <!--  -->
  </div>
</template>

<script>
import Photos from '@/components/Photos.vue'

export default {
  components: {
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
      this.query = text
      console.log(event.target.classList.add('border-blue-500'))
    },
  },
}
</script>

<style scoped></style>
