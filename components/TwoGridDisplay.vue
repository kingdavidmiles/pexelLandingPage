<template>
  <div>
    <div class="flex">
      <div class="md:w-1/5 w-3/5 m-3">
        <div class="px-3 md:px-0 lg:font-bold md:text-md lg:text-lg text-base">
          Free Stock Photos
        </div>
      </div>
      <div class="md:w-1/5 lg:w-1/5 invisible md:visible lg:visible"></div>
      <div class="md:w-1/5 lg:w-1/5 invisible md:visible lg:visible"></div>
      <div
        class="w-1/5 md:w-1/5 lg:w-1/5 invisible md:visible lg:visible"
      ></div>

      <!-- second col for Trending and hover to drop down -->
      <div class="md:w-1/5 lg:w-1/5 w-2/5 md:-mx-2">
        <nav
          aria-label="primary"
          class="
            relative
            z-20
            flex-col flex-grow
            pb-1
            md:pb-0 md:flex md:justify-end md:flex-row
          "
        >
          <div class="group inline-block">
            <button
              class="
                outline-none
                focus:outline-none
                px-3
                py-3
                rounded-sm
                flex
                items-center
                min-w-32
              "
            >
              <span class="flex-1 font-bold">Tranding</span>
              <span>
                <svg
                  class="
                    fill-current
                    h-4
                    w-4
                    transform
                    group-hover:-rotate-180
                    transition
                    duration-150
                    ease-in-out
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </span>
            </button>
            <!-- items on hover -->
            <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
              <div class="px-2 pt-2 pb-4 shadow-lg bg-white w-80">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <ul class="w-100">
                    <li>Trending</li>
                    <li>New</li>
                    <li>Following</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    studentUpdate: function () {
      this.$http.get('/webapi/student').then(
        (results) => {
          console.log(results.data.data)
          this.student = results.data.data
        },
        (results) => {
          console.log('ERROR')
          console.log(results)
        }
      )
      setTimeout(this.studentUpdate, 5000)
    },
  },
}
</script>

<style lang="scss" scoped></style>
