

<script>
    import add1 from '../assets/fire_safety_yellow.png';
	import add2 from '../assets/watching_some_dvd.png';		
</script>

<footer class="bg-black py-20 px-20 mt-auto">
	<div class="container mx-auto">
		<div class="flex">
			<ul class="text-white w-2/6 ">
				<li  class="my-4"><a sveltekit:prefetch href="#/contact">Contact Us</a></li>
				<li  class="my-4">
					<a sveltekit:prefetch href="#/terms">Terms of Service</a>
				</li>
				<li class="my-4">
					<a sveltekit:prefetch href="#/privacy">Privacy</a>
				</li>
				<li class="my-4">	
					<a sveltekit:prefetch target="_blank"  href="https://bingeclock.com/">THCRM for Business</a>
				</li>
			</ul>
			 <div class="ml-10 w-full flex justify-between">
				<img src="{add1}" alt="" class="w-48">
				<img src="{add2}" alt="" class="w-48">
				<img src="{add1}" alt="" class="w-48">
				<img src="{add2}" alt="" class="w-48">
			 </div>
		</div>
	</div>
</footer>


