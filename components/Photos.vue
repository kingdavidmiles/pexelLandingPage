<template>
  <div>
    <div class="flex flex-wrap overflow-hidden">
      <div class="w-20 overflow-hidden">
        <!-- Column Content -->
      </div>

      <div class="w-11/12 overflow-hidden">
        <section class="">
          <!-- {{ query }} -->
          <Display />
          <!--  -->
          <div class="container">
            <div class="flex flex-wrap">
              <div
                v-for="(photosArr, i) of photos"
                :key="i"
                class="flex justify-self-center"
              >
                <div
                  v-for="photo of photosArr"
                  :key="photo.id"
                  class="relative hover-trigger"
                >
                  <img class="px-2 m-3" :src="photo.src.large2x" />

                  <div
                    class="
                      absolute
                      bottom-0
                      left-0
                      h-22
                      w-100
                      px-8
                      py-3
                      hover-target
                    "
                  >
                    <div class="flex flex-col">
                      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full">
                          <div class="overflow-hidden sm:rounded-lg">
                            <table class="min-w-full">
                              <tbody>
                                <tr>
                                  <td
                                    class="
                                      px-10
                                      m-3
                                      py-4
                                      whitespace-nowrap
                                      relative
                                    "
                                  >
                                    <div class="flex items-center">
                                      <!-- <div class="myDIV"> -->
                                      <div class="flex-shrink-0 h-10 w-10">
                                        <img
                                          class="h-10 w-10 rounded-full"
                                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                          alt=""
                                        />
                                      </div>
                                      <div class="text-white">
                                        <small> {{ photo.photographer }}</small>
                                      </div>
                                    </div>
                                    <!-- </div> -->
                                  </td>

                                  <td
                                    class="
                                      px-2
                                      py-4
                                      whitespace-nowrap
                                      text-right text-sm
                                      font-medium
                                    "
                                    v-for="(item, index) in items"
                                    :key="index"
                                  >
                                    <a
                                      href="#"
                                      class="text-white hover:text-indigo-900"
                                      >{{ item.name }}</a
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="w-20 overflow-hidden">
        <!-- Column Content -->
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from 'pexels'
import Display from '../components/Display.vue'
export default {
  components: {
    Display,
  },
  props: {
    query: {
      type: String,
      // required: true,
    },
  },
  data() {
    return {
      items: [{ name: 'edit' }, { name: 'edit' }, { name: 'edit' }],
      client: null,
      photos: [],
    }
  },
  watch: {
    query(oldVal, newVal) {
      if (oldVal === newVal) {
        return
      }
      this.getPhotos()
    },
  },
  methods: {
    /**
     *
     */
    groupBy(items, n) {
      const result = new Array(Math.ceil(items.length / n))
        .fill()
        .map((_) => items.splice(0, n))
      return result
    },

    /**
     *
     */
    getPhotos() {
      this.client = createClient(process.env.PEXEL_API_KEY)
      this.client.photos
        .search({ query: this.query, per_page: 20 })
        .then((res) => {
          this.photos = this.groupBy(res.photos, 4)
        })
    },
  },
  mounted() {
    if (!this.client) {
      this.getPhotos()
    }
  },
  beforeDestroy() {
    if (this.client) {
      this.client = null
    }
  },
}
</script>

<style>
.hiddenText {
  display: none;
}
.hoverDiv:hover + .hiddenText {
  display: block;
  color: rgb(71, 0, 65);
  font-size: 22px;
  font-weight: bold;
}
.hover-trigger .hover-target {
  display: none;
}

.hover-trigger:hover .hover-target {
  display: block;
}
</style>
