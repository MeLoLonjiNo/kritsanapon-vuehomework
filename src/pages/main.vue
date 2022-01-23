<template>
  <div class="w-screen h-screen bg-white flex flex-row flex-wrap p-3">
    <div class="mx-auto my-auto w-2/3">
      <div
        class="
          text-center text-4xl
          leading-tight
          font-semibold
          mb-10
          text-blue-500
        "
      >
        Profile
      </div>
      <div
        class="
          rounded-lg
          shadow-lg
          bg-gray-600
          w-full
          flex flex-row flex-wrap
          p-3
          antialiased
        "
        style="
          background-image: url('https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-6/s960x960/226924659_1453578978346016_6533083631167486864_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFWewLV9Jg98Dq4nt2HuD7zr7PSj-l3Pkevs9KP6Xc-R2q8g4rBz8oho8jVJNFlcTIMkkOGbjuJFuTE05lTFs-L&_nc_ohc=6fTwHsXVvO0AX__sT8G&_nc_ht=scontent.fbkk22-7.fna&oh=00_AT9az1BouY2GLpJTdQ85NA-Oqks2tyAnoVr3qfOpD0GinA&oe=61F221F2');
          background-repeat: no-repat;
          background-size: cover;
          background-blend-mode: multiply;
        "
      >
        <div class="md:w-1/3 w-full">
          <img
            class="rounded-lg shadow-lg antialiased"
            src="	https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.6435-9/107895126_1171621533208430_5843011545558160330_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE9cvEsLSAowqa80L55-ITrXnlmC5DIL-9eeWYLkMgv75_siMkcshREhkv9-IvWjm2dNSzqcowI5Bp7o2UR6yWK&_nc_ohc=hiyh3GbfGMsAX_4wjom&tn=-6MJk5FDB-uTsp0b&_nc_ht=scontent.fbkk22-1.fna&oh=00_AT8Zh7xe3AN3XzD-EiMYSCS5XhHvouG0gcvSF7jyWRwAYg&oe=6211D70B"
          />
        </div>
        <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
          <div
            class="
              w-full
              text-right text-gray-700
              font-semibold
              relative
              pt-3
              md:pt-0
            "
          >
            <div class="text-2xl text-white leading-tight">{{ name }}</div>
            <div class="text-normal text-gray-300">
              <span class="border-b border-dashed border-gray-500 pb-1"
                >{{ nickanme }} ({{ old }})</span
              >
              <div>
                {{ study[0].year }}<br />{{ study[0].field }}
                {{ study[0].faculty }} {{ study[0].university }}
              </div>
            </div>
            <div
              class="
                text-sm text-gray-300
                hover:text-gray-400
                cursor-pointer
                md:absolute
                pt-3
                md:pt-0
                bottom-0
                right-0
              "
            >
              <router-link :to="{ name: 'contact' }"
                ><b>Contact >></b></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  components: {},
  data() {
    return {
      name: 'Kritsanapon Rakkiatngam',
      old: 21,
      nickanme: 'MeLo - MeLoLonJiNo',
      study: [
        {
          year: "Bachelor's degree year 3",
          field: 'IT',
          faculty: 'SIT',
          university: 'KMUTT',
        },
      ],
    };
  },
  created() {},
};
</script>
