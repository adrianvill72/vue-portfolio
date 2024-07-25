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
      <div class="fixed top-4 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply opacity-50 filter animate-blob blur-2xl"></div>
      <div class="fixed bottom-4 transform -translate-x-1/2 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply opacity-50 filter animate-blob2  blur-2xl "> </div>
      <div class="fixed bottom-4 right-4 transform -translate-x-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply opacity-50 filter animate-blob3 blur-2xl "> </div>
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
      <div class="flex flex-wrap justify-evenly max-w-screen mx-auto">
        <div class="cards basis-1/2 max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div class="relative px-6 py-4">
            <a href="https://vuejs.org/" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/en/f/f6/UTRGV_Athletics_logo.svg" class="absolute right-0 w-16 h-16" alt="Python logo" />
            </a>
            <div class="absolute text-gray-700 right-0 top-24"> Grad. July 2024</div>
            <div class="font-bold text-xl -mb-2">University Of Texas </div>
            <div class="font-bold text-xl mb-1">Rio Grande Valley</div>
            <p class="text-gray-700 max-w-48">
              Bachelors Of Science - Computer Science
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            Orgs:
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">SHPE</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">IEEE</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Frontera Devs</span>
          </div>
        </div>
        <div class="cards basis-1/2 max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div class="relative px-6 py-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Best_Buy_logo_2018.svg" class="absolute object-cover right-0 w-17 h-10" alt="Python logo" />
            <div class="font-bold mb-2">Employment</div>
            <h1 class="text-black text-base">
              Geeksquad - Best Buy
            </h1>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-evenly max-w-screen mx-auto">
        <div class="cards basis-1/2 max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Project 1</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
        <div class="cards basis-1/2 max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Project 2</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
        <div class="cards basis-1/2 max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Projet 3</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
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
