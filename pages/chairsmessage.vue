<template>
  <div>
    <div v-if="$i18n.locale === 'en'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p class="mt-6 text-base leading-8 text-gray-700">
                  As the founder and president of Öncü Academy, I am happy to announce the opening of our learning center. After a long preparation, it is truly exciting to make this announcement to you.
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  We set out to build and develop a learning center that breaks down traditional learning barriers with the slogan "An academy without borders". Our team consists of experienced academics and professionals from Turkey, the United States, and Canada who share a passion for transforming entrenched, classical learning practices.
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  Our focus will primarily be on executive learning programs. We will offer MBA and Leadership certificate programs, short modules, and trainings focused on specific topics such as disruptive developments, disruptive technologies, and AI-based leadership. Our goal is to provide our learners with an in-depth understanding of the latest developments in their fields and help them achieve their professional and personal development goals.
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  In the not-too-distant future, our curriculum will expand to include philosophy, sociology, history, media, and art programs. We will also have public webinars on the state of the world economy and politics. Additionally, we will publish a monthly newsletter that presents our academy's activities and our assessment of the world economy and politics.
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  We are excited to connect with our learners and help them achieve their learning goals. Thank you for your interest. We look forward to receiving your messages and questions eagerly.
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  <strong>Ahmet Öncü, Founder and Chair</strong>
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  April 2023
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1 p-12 -mt-4 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/mj5.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div v-if="$i18n.locale === 'tr'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p class="mt-6 text-base leading-8 text-gray-700">
                  As the founder and president of Öncü Academy, I am happy to announce the opening of our learning center. After a long preparation, it is truly exciting to make this announcement to you.
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  We set out to build and develop a learning center that breaks down traditional learning barriers with the slogan "An academy without borders". Our team consists of experienced academics and professionals from Turkey, the United States, and Canada who share a passion for transforming entrenched, classical learning practices.
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  Our focus will primarily be on executive learning programs. We will offer MBA and Leadership certificate programs, short modules, and trainings focused on specific topics such as disruptive developments, disruptive technologies, and AI-based leadership. Our goal is to provide our learners with an in-depth understanding of the latest developments in their fields and help them achieve their professional and personal development goals.
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  In the not-too-distant future, our curriculum will expand to include philosophy, sociology, history, media, and art programs. We will also have public webinars on the state of the world economy and politics. Additionally, we will publish a monthly newsletter that presents our academy's activities and our assessment of the world economy and politics.
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  We are excited to connect with our learners and help them achieve their learning goals. Thank you for your interest. We look forward to receiving your messages and questions eagerly.
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  <strong>Ahmet Öncü, Founder and Chair</strong>
                </p>
                <p class="mt-6 text-base leading-8 text-gray-700">
                  April 2023
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1 p-12 -mt-4 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/mj5.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChairPage',
  data () {
    return {
      showModal: false,
      headTitle: this.$t('chairsmessage') + ' | ' + this.$t('title'),
      headerTitle: '',
      headerParagraph: '',
      headerImage: ''
    }
  },
  head () {
    return {
      title: this.headTitle
    }
  },
  watch: {
    '$i18n.locale' (newVal, oldVal) {
      this.updateHeader()
    }
  },
  mounted () {
    this.updateHeader()
  },
  methods: {
    updateHeader () {
      const headerTitle =
        this.$i18n.locale === 'en'
          ? "Chair's Message"
          : 'Başkandan Mesaj'
      const headerParagraph =
        this.$i18n.locale === 'en'
          ? 'A message from the founder.'
          : 'A message from the founder.'
      const headerImage =
        this.$i18n.locale === 'en'
          ? '/images/mj5.png'
          : '/images/mj5.png'
      this.$nuxt.$emit('updateHeader', { headerTitle, headerParagraph, headerImage })
    }
  }
}
</script>
