<script >
import Modal from './components/Modal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      isEmailModalVisible: false,
      isPhoneModalVisible: false,
    };
  },
  methods: {
    async copyURL(mytext) {
      try {
        await navigator.clipboard.writeText(mytext);
        alert('Copied');
      } catch($e) {
        alert('Cannot copy');
      }
    },
    openModal(modal) {
      if (modal === 'EmailModal') {
        this.isEmailModalVisible = true;
      }else if (modal === 'PhoneModal') {
        this.isPhoneModalVisible = true;
      }
    },
    closeModal(modal) {
      if (modal === 'EmailModal') {
        this.isEmailModalVisible = false;
      }else if (modal === 'PhoneModal') {
        this.isPhoneModalVisible = false;
      }
    },
  },
};
</script>

<template>
  <div class=" bg-gray-50 min-h-screen flex justify-center px-16">
    <div class="relative w-full ">
      <div class="fixed left-[50%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply opacity-50 filter animate-blob blur-2xl"></div>
      <div class="fixed left-[15%] top-[85%] transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply opacity-50 filter animate-blob2  blur-2xl "> </div>
      <div class="fixed left-[85%] top-[85%] transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply opacity-50 filter animate-blob3 blur-2xl "> </div>
      <div class="flex flex-col items-center p-6 ">
        <img src="./assets/headshotFinal.png" class="object-cover rounded-full w-32 h-32 mb-4" alt="Adrian Villarreal" />
        <div class=" text-3xl font-extralight p-2 rounded-lg mb-2">Adrian Villarreal</div>
          <div class="flex space-x-4 mb-6">
            <span>
              <button @click="openModal('EmailModal')" class="rounded text-black hover:underline">Email</button>

              <Modal :isVisible="isEmailModalVisible" @close="closeModal('EmailModal')">
                <p class=" text-2xl mb-3">Feel free to contact me at the following email:</p>
                <div class=" relative grid grid-cols-2 ">
                  <p class="" > ..... • adrianvill72@gmail.com</p>
                  <img class="absolute bottom-0  w-6 hover:w-7" @click="copyURL('adrianvill72@gmail.com')" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdGtFCj2-QKWDM-qTPI2VUqlvfsbvWB-nKw&s">
                </div>
              </Modal>
            </span>
            <span>•</span>
            <span>
              <a href="https://github.com/adrianvill72" target="_blank" class="rounded hover:underline">
                GitHub
              </a>
            </span>

            <span>•</span>
            <span>
              <a href="https://linkedin.com/in/adrianvill02" target="_blank" class="rounded hover:underline">
                LinkedIn
              </a>
            </span>
            <span>•</span>
            <span>
              <button @click="openModal('PhoneModal')" class="rounded text-black hover:underline">Phone</button>

              <Modal :isVisible="isPhoneModalVisible" @close="closeModal('PhoneModal')">
                <h1 class="text-2xl">Feel free to contact me at the following phone #:</h1>
                <p class="mt-4">• (956)579-4042</p>
              </Modal>
            </span>
          </div>
          <div class="flex space-x-4">
            <a href="https://vuejs.org/" target="_blank">
              <img src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" class="w-16 h-16" alt="Python logo" />
            </a>
            <a href="https://vitejs.dev" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" class="w-16 h-16" alt="C++ logo" />
            </a>
            <a href="https://vitejs.dev" target="_blank">
              <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" class="w-16 h-16" alt="JavaScript logo" />
            </a>
            <a href="https://vitejs.dev" target="_blank">
              <img src="https://www.svgrepo.com/show/331760/sql-database-generic.svg" class="w-16 h-16" alt="SQL logo" />
            </a>
          </div>
        </div>
      <div class="flex flex-wrap justify-evenly max-w-screen mx-auto mb-10">
        <div class="cards basis-1/2 max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div class="relative px-6 py-4">
            <a href="https://vuejs.org/" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/en/f/f6/UTRGV_Athletics_logo.svg" class="absolute right-0 w-16 h-16" alt="Python logo" />
            </a>
            <div class="absolute text-gray-500 right-0 top-24"> Grad. July 2024</div>
            <div class="font-bold text-xl -mb-2">University Of Texas </div>
            <div class="font-bold text-xl mb-1">Rio Grande Valley</div>
            <p class="text-gray-500 italic max-w-48">
              Bachelors Of Science Computer Science
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            Orgs:
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">SHPE</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">IEEE</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Frontera Devs</span>
          </div>
        </div>
        <div class="cards basis-1/2 max-w-sm rounded overflow-hidden shadow-lg m-4 ">
          <div class="relative px-6 py-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Best_Buy_logo_2018.svg" class="absolute object-cover right-0 w-17 h-10" alt="Python logo" />
            <div class="font-bold mb-2">Employment</div>
            <h1 class="text-black text-sm italic">• Advanced Computer Technician </h1>
            <p class="text-xs mb-2"> 2018-2024</p>
            <h1 class="text-black text-sm italic">• IT Consultation / Support Technician</h1>
            <p class="text-xs"> 2017-2018</p>
          </div>
          <div class="flex justify-center  py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><div class="outline outline-1 outline-offset-1  rounded hover:bg-white p-0.5">More info</div></div>
        </div>
      </div>
      <div class="flex flex-wrap justify-evenly max-w-screen mx-auto">
        <div class="cards basis-1/2 max-w-lg rounded overflow-hidden shadow-lg m-4">
          <div class="px-6 py-4">
            <div class="flex italic font-bold justify-center text-xl mb-2">Valley Markets</div>
            <p class="flex font-light justify-evenly text-gray-700 text-base  ">
              A dynamic marketplace platform connecting customers, local businesses, event hosts, and vendors. Built with React and Node.js, the application features secure user authentication and real-time data management using Firebase. Deployed on a reliable website for seamless user experience and showcase purposes.
            </p>
          </div>
          <div class="flex justify-center">
            <div class="px-3"><div class="py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://seniorproject-vc6r.onrender.com/" target=”_blank” class="outline outline-1 outline-offset-1  rounded hover:bg-white p-0.5">Live Site</a></div></div>
            <div class="px-3"> <div class="py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://github.com/adrianvill72/SeniorProject/tree/main/my-app/" target=”_blank” class="outline outline-1 outline-offset-1  rounded hover:bg-white p-0.5">GitHub</a></div></div>
          </div>
        </div>
        <div class="cards basis-1/2 max-w-lg rounded overflow-hidden shadow-lg m-4">
          <div class="px-6 py-4">
            <div class="flex italic font-bold justify-center text-xl mb-2">Brain Tumor Segmentation</div>
            <p class="flex font-light justify-evenly text-gray-700 text-base">
              Developed a high-precision solution for medical image analysis, leveraging machine learning and deep learning techniques. Engineered and optimized CNN models using Python and PyTorch, achieving substantial improvements in segmentation accuracy.
            </p>
          </div>
          <div class="flex justify-center bottom-1">
            <div class="px-6 pt-4 pb-2"><div class="px-3 py-1 mr-2 mb-2 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://github.com/adrianvill72/SegmentationProject/" target=”_blank” class="outline outline-1 outline-offset-1  rounded hover:bg-white p-0.5">GitHub</a></div></div>

          </div>
        </div>
        <div class="cards basis-1/2 max-w-lg rounded overflow-hidden shadow-lg m-4">
          <div class="px-6 py-4">
            <div class="flex italic font-bold justify-center text-xl mb-2">Border Entry Analysis/Forecasting</div>
            <p class="flex font-light justify-evenly text-gray-700 text-base">
              Analyzed US border entry data from 1964 to 2024, including various modes of entry. Applied K-means clustering to identify traffic patterns and SARIMAX for time series forecasting to predict future trends, providing valuable insights for strategic planning.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.cards{
  background-color: rgba(255, 255, 255, .2);
  border: none;
  backdrop-filter: blur(6px);
  justify-content: center;
  width: 100%;
  padding: 1.5em 1em;
}
</style>
