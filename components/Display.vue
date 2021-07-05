<template>
  <div>
    <!-- <center> -->
    <div class="flex">
      <div class="w-1/5 m-3 px-3 font-bold">Free Stock Photos</div>
      <div class="w-1/5"></div>
      <div class="w-1/5"></div>
      <div class="w-1/5"></div>

      <div class="w-1/5 -mx-2">
        <nav
          aria-label="primary"
          class="
            relative
            z-20
            flex-col flex-grow
            hidden
            pb-4
            md:pb-0 md:flex md:justify-end md:flex-row
          "
        >
          <div class="group inline-block">
            <button
              class="
                outline-none
                focus:outline-none
                px-3
                py-1
                bg-white
                rounded-sm
                flex
                items-center
                min-w-32
              "
            >
              <span class="flex-1">Tranding</span>
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
            <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
              <div class="px-2 pt-2 pb-4 shadow-lg">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <ul>
                    <li>Hellortyuio</li>
                    <li>Hellortyuio</li>
                    <li>Hellortyuio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- </center> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
