<template>
  <section class="">
    {{ query }}
    <h1>hello world</h1>
    <div class="container">
      <div class="flex justify-items-center flex-wrap">
        <div
          v-for="(photosArr, i) of photos"
          :key="i"
          class="flex m-3 justify-self-center"
        >
          <div v-for="photo of photosArr" :key="photo.id">
            <img class="m-3" :src="photo.src.medium" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { createClient } from 'pexels'
export default {
  props: {
    query: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
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
        .search({ query: this.query, per_page: 11 })
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
.row-rie {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column-rie {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column-rie img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column-rie {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column-rie {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>
