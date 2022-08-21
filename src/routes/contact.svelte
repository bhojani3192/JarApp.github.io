<script>
    import Header from '../lib/header/header.svelte'
    import Counter from '../lib/Counter.svelte'
    import { counter } from '../lib/stores.js'
    import  carouselBg from '../assets/Background.png'
    import  jarGif from '../assets/jarGif.gif'
    import jarXl from '../assets/jarxl.png';
      import jarXs from '../assets/jarxs.png';
      import jarSm from '../assets/jarsm.png';
      import jarMd from '../assets/jarmd.png';
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
      import Button, { Label } from '@smui/button';
    import Skeleton from '../../node_modules/svelte-skeleton-loader';
    import  SkeletonTheme  from "../../node_modules/svelte-skeleton-loader/src/Skeleton-theme.svelte"
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
  
  
  
    let open = false;
    let response = 'Nothing yet.';
    const count = counter();
  
  setTimeout(() => {
  
    const box = document.getElementById('box-2');
      box.style.display = 'none';
  
  }, 2000); 
    
  </script>
  
  <!-- <div class="border  border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-200 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div> -->

  <Dialog
bind:open
scrimClickAction=""
escapeKeyAction=""
aria-labelledby="mandatory-title"
aria-describedby="mandatory-content" class="absolute z-20" 
>
<Title id="mandatory-title">Product</Title>
<Content id="mandatory-content">
  Before you continue on this page, you must answer my riddle of age. When
</Content>
<Actions>
  <Button on:click={() => (response = 'Wrong answer. Thrown in the lake.')}>
	<Label>close</Label>
  </Button>
  <Button on:click={() => (response = 'You are correct. You may pass.')}>
	<Label>ok</Label>
  </Button>

</Actions>
</Dialog>
 
<div class="container mx-auto my-10">
  <Swiper
  slidesPerView={1}
  spaceBetween={30}
  loop={true}
  navigation={true}
  modules={[Pagination, Navigation]}
  class="mySwiper"
>
  <SwiperSlide class="w-full  relative text-center bg-scroll  py-5
  bg-no-repeat bg-cover bg-center px-20" style="background-image:url('{carouselBg}');">
  <div class="grid grid-rows-3 grid-flow-col gap-4"> 
    <div class="relative">

      <div  class=" bg-white absolute z-10 hidden ">
        <div  class="w-80 animate-pulse  bg-white h-96 p-5 hidden">
          <Skeleton id="box-2"  class="loader"  circle={true} height={50} width={50} />
        
               <div> <Skeleton class="loader" /></div>
        
               <Skeleton class="loader" count={5} />
        
          </div>
      </div>
    <div class="flex items-center">
      <div class="group w-24 my-10 mx-auto min-h-220 ">
        <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 group-hover:block w-44 translate-y-11" on:click={() => (open = true)}>
        <img src="{jarSm}" class="mx-auto group-hover:hidden min-w-full translate-y-11" alt="jars" >
      </div>
      <div>
        <h4 class="font-bold mb-3">Subscription</h4>
        <div class="flex relative z-2">
          <Counter />
          <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
          <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
          <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
          <div>
          </div>
        </div>
      </div>
    </div>
    <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11">
          <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11 " alt="jars" on:click={() => (open = true)}>
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div>  
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class=" w-24 my-10 mx-auto min-h-220">
          <div class="group">
            <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute top-0 left-4 z-2 w-28 group-hover:block translate-y-20" on:click={() => (open = true)}>
            <img src="{jarXs}" class="mx-auto group-hover:hidden translate-y-20" alt="jars">
          </div>
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-14" on:click={() => (open = true)}>
          <img src="{jarSm}" class="mx-auto group-hover:hidden translate-y-14" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
    
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class=" w-24 my-10 mx-auto min-h-220">
          <div class="group">
            <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute bottom-11 left-4 z-2 w-28 group-hover:block translateon:click={() => (open = true)}-y-20	" on:click={() => (open = true)}>
            <img src="{jarXs}" class="mx-auto group-hover:hidden translate-y-20" alt="jars">
          </div>
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
    <div class="flex items-center">
      <div class="group w-24 my-10 mx-auto min-h-220">
        <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
        <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
      </div>
      <div>
        <h4 class="font-bold mb-3">Subscription</h4>
        <div class="flex relative z-2">
          <Counter />
          <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
          <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
          <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
          <div>
          </div>
        </div>
      </div> 
    </div>
    <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
  </div>

  </SwiperSlide>
  <SwiperSlide class="w-full  relative text-center bg-scroll  py-5
  bg-no-repeat bg-cover bg-center px-20" style="background-image:url('{carouselBg}');">
  <div class="grid grid-rows-3 grid-flow-col gap-4"> 
    <div class="relative">
      <div id="box-2" class="w-full bg-white absolute z-10 hidden">
        <div  class="w-80 animate-pulse  bg-white h-96 p-5 ">
          <Skeleton class="loader"  circle={true} height={50} width={50} />
        
               <div> <Skeleton class="loader" /></div>
        
               <Skeleton class="loader" count={5} />
        
          </div>
      </div>
    <div class="flex items-center">
      <div class="group w-24 my-10 mx-auto min-h-220 ">
        <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 group-hover:block w-44 translate-y-11" on:click={() => (open = true)}>
        <img src="{jarSm}" class="mx-auto group-hover:hidden min-w-full translate-y-11" alt="jars" >
      </div>
      <div>
        <h4 class="font-bold mb-3">Subscription</h4>
        <div class="flex relative z-2">
          <Counter />
          <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
          <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
          <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
          <div>
          </div>
        </div>
      </div>
    </div>
    <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11">
          <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11 " alt="jars" on:click={() => (open = true)}>
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div>  
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class=" w-24 my-10 mx-auto min-h-220">
          <div class="group">
            <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute top-0 left-4 z-2 w-28 group-hover:block translate-y-20" on:click={() => (open = true)}>
            <img src="{jarXs}" class="mx-auto group-hover:hidden translate-y-20" alt="jars">
          </div>
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-14" on:click={() => (open = true)}>
          <img src="{jarSm}" class="mx-auto group-hover:hidden translate-y-14" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
    
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class=" w-24 my-10 mx-auto min-h-220">
          <div class="group">
            <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute bottom-11 left-4 z-2 w-28 group-hover:block translateon:click={() => (open = true)}-y-20	" on:click={() => (open = true)}>
            <img src="{jarXs}" class="mx-auto group-hover:hidden translate-y-20" alt="jars">
          </div>
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
    <div class="flex items-center">
      <div class="group w-24 my-10 mx-auto min-h-220">
        <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
        <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
      </div>
      <div>
        <h4 class="font-bold mb-3">Subscription</h4>
        <div class="flex relative z-2">
          <Counter />
          <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
          <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
          <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
          <div>
          </div>
        </div>
      </div> 
    </div>
    <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div class="group w-24 my-10 mx-auto min-h-220">
          <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
          <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
        </div>
        <div>
          <h4 class="font-bold mb-3">Subscription</h4>
          <div class="flex relative z-2">
            <Counter />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
            <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
            <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
            <div>
            </div>
          </div>
        </div> 
      </div>
      <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
    </div>
  </div>

</SwiperSlide>
  <SwiperSlide class="w-full  relative text-center bg-scroll  py-5
  bg-no-repeat bg-cover bg-center px-20" style="background-image:url('{carouselBg}');">
     <div class="grid grid-rows-3 grid-flow-col gap-4"> 
        <div class="relative">
          <div id="box-2" class="w-full bg-white absolute z-10 hidden">
            <div  class="w-80 animate-pulse  bg-white h-96 p-5 ">
              <Skeleton class="loader"  circle={true} height={50} width={50} />
            
                   <div> <Skeleton class="loader" /></div>
            
                   <Skeleton class="loader" count={5} />
            
              </div>
          </div>
        <div class="flex items-center">
          <div class="group w-24 my-10 mx-auto min-h-220 ">
            <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 group-hover:block w-44 translate-y-11" on:click={() => (open = true)}>
            <img src="{jarSm}" class="mx-auto group-hover:hidden min-w-full translate-y-11" alt="jars" >
          </div>
          <div>
            <h4 class="font-bold mb-3">Subscription</h4>
            <div class="flex relative z-2">
              <Counter />
              <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
              <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
              <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
              <div>
              </div>
            </div>
          </div>
        </div>
        <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11">
              <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11 " alt="jars" on:click={() => (open = true)}>
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div>  
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class=" w-24 my-10 mx-auto min-h-220">
              <div class="group">
                <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute top-0 left-4 z-2 w-28 group-hover:block translate-y-20" on:click={() => (open = true)}>
                <img src="{jarXs}" class="mx-auto group-hover:hidden translate-y-20" alt="jars">
              </div>
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-14" on:click={() => (open = true)}>
              <img src="{jarSm}" class="mx-auto group-hover:hidden translate-y-14" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
        
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class=" w-24 my-10 mx-auto min-h-220">
              <div class="group">
                <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute bottom-11 left-4 z-2 w-28 group-hover:block translateon:click={() => (open = true)}-y-20	" on:click={() => (open = true)}>
                <img src="{jarXs}" class="mx-auto group-hover:hidden translate-y-20" alt="jars">
              </div>
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
        <div class="flex items-center">
          <div class="group w-24 my-10 mx-auto min-h-220">
            <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
            <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
          </div>
          <div>
            <h4 class="font-bold mb-3">Subscription</h4>
            <div class="flex relative z-2">
              <Counter />
              <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
              <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
              <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
              <div>
              </div>
            </div>
          </div> 
        </div>
        <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
      </div>       
  </SwiperSlide>
  <SwiperSlide class="w-full  relative text-center bg-scroll  py-5
  bg-no-repeat bg-cover bg-center px-20" style="background-image:url('{carouselBg}');">
     <div class="grid grid-rows-3 grid-flow-col gap-4"> 
        <div class="relative">
          <div id="box-2" class="w-full bg-white absolute z-10 hidden ">
            <div  class="w-80 animate-pulse  bg-white h-96 p-5 ">
              <Skeleton class="loader"  circle={true} height={50} width={50} />
            
                   <div> <Skeleton class="loader" /></div>
            
                   <Skeleton class="loader" count={5} />
            
              </div>
          </div>
        <div class="flex items-center">
          <div class="group w-24 my-10 mx-auto min-h-220 ">
            <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 group-hover:block w-44 translate-y-11" on:click={() => (open = true)}>
            <img src="{jarSm}" class="mx-auto group-hover:hidden min-w-full translate-y-11" alt="jars" >
          </div>
          <div>
            <h4 class="font-bold mb-3">Subscription</h4>
            <div class="flex relative z-2">
              <Counter />
              <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
              <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
              <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
              <div>
              </div>
            </div>
          </div>
        </div>
        <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11">
              <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11 " alt="jars" on:click={() => (open = true)}>
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div>  
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class=" w-24 my-10 mx-auto min-h-220">
              <div class="group">
                <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute top-0 left-4 z-2 w-28 group-hover:block translate-y-20" on:click={() => (open = true)}>
                <img src="{jarXs}" class="mx-auto group-hover:hidden translate-y-20" alt="jars">
              </div>
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-14" on:click={() => (open = true)}>
              <img src="{jarSm}" class="mx-auto group-hover:hidden translate-y-14" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
        
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class=" w-24 my-10 mx-auto min-h-220">
              <div class="group">
                <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute bottom-11 left-4 z-2 w-28 group-hover:block translateon:click={() => (open = true)}-y-20	" on:click={() => (open = true)}>
                <img src="{jarXs}" class="mx-auto group-hover:hidden translate-y-20" alt="jars">
              </div>
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
        <div class="flex items-center">
          <div class="group w-24 my-10 mx-auto min-h-220">
            <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute  z-2 -top-4 -left-4  w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
            <img src="{jarMd}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
          </div>
          <div>
            <h4 class="font-bold mb-3">Subscription</h4>
            <div class="flex relative z-2">
              <Counter />
              <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
              <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
              <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
              <div>
              </div>
            </div>
          </div> 
        </div>
        <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
        <div class="relative">
          <div class="flex items-center">
            <div class="group w-24 my-10 mx-auto min-h-220">
              <img src="{jarGif}" alt="" class="opacity-0 hover:opacity-100 absolute -top-4 -left-4 z-2 w-44 group-hover:block translate-y-11" on:click={() => (open = true)}>
              <img src="{jarXl}" class="mx-auto group-hover:hidden translate-y-11" alt="jars">
            </div>
            <div>
              <h4 class="font-bold mb-3">Subscription</h4>
              <div class="flex relative z-2">
                <Counter />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.increment} >+</button >
                <input class="bg-white p-2 rounded-sm w-12 max-h-8 focus:outline-none" value="{$count}"  />
                <button   class="bg-white  rounded-sm w-8 max-h-8" on:click={count.decrement}  >-</button>
                <div>
                </div>
              </div>
            </div> 
          </div>
          <input type="text" value=" Green, Rounded Peaches (150gr)" class="text-black focus:outline-none p-2 rounded bg-green-100 w-64">
        </div>
      </div> 
  </SwiperSlide>
  
</Swiper>
</div>