
<script lang="ts">
//    import { page } from '$app/stores';
    import burgerMenu from '../../assets/Menu.png';
	import { Input } from "@smui/textfield";
	import Fab from '@smui/fab';
	import next from '../../assets/next.png';
	import Button, { Label } from '@smui/button';
    import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';

	let percent = 0;


  let open = false;
  let isOpen = false;
  let response = 'Nothing yet.';

  import type { MenuComponentDev } from '@smui/menu';
  import Menu from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';
  import Slider from '@smui/slider';
  import FormField from '@smui/form-field';

  let menu: MenuComponentDev;
  let menuTerp: MenuComponentDev;
  let menuEffect: MenuComponentDev;;
  let menuType: MenuComponentDev;
  let menuLocation;
  let rangeSlider;
  let clicked = 'nothing yet';
 
 	
	export let name: string;
	let value = '';
	function doSearch() {
	  alert('Search for ' + value);
	}
   
	function handleKeyDown(event: CustomEvent | KeyboardEvent) {
	  event = event as KeyboardEvent;
	  if (event.key === 'Enter') {
		doSearch();	
	  }
	}
</script>
 
<header class="bg-black w-full  flex items-center px-5 py-5">
	<div class="w-10">
		
        <Button on:click={() => (open = true)}>
            <img src={burgerMenu} alt="menu" />
        </Button>		
<Dialog
bind:open
scrimClickAction=""
escapeKeyAction=""
aria-labelledby="mandatory-title"
aria-describedby="mandatory-content" class="absolute z-20"
>
<Title id="mandatory-title">Data</Title>
<Content id="mandatory-content">
  Before you continue on this page, you must answer my riddle of age. When
</Content>
<Actions>
  <Button on:click={() => (response = 'Wrong answer. Thrown in the lake.')}>
	<Label>Sign Up</Label>
  </Button>
  <Button on:click={() => (response = 'You are correct. You may pass.')}>
	<Label>Login</Label>
  </Button>

</Actions>
</Dialog>     
	</div>
	<ul class="w-full flex items-center justify-between ml-5">
		<li class="text-white">
			The Highest
		</li>
		<li class="text-white text-lg" on:click={() => menuLocation.setOpen(true)} >
			Curently viewing Las Vegas Nv
		</li>
		<Menu bind:this={menuLocation} class=" overflow-hidden  p-5 button-menu absolute z-20  text-center location w-full ">
			<div class="header-button ">
				<div class="grid">
					<ul class="py-5 flex justify-center relative z-10 mx-5 list-none">
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="first" >
							<span class="text-black ">Another City</span>
							</Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="second"  >
								<span class="text-black ">Another City</span>
							  </Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="third" >
							  <Label class="text-black ">Another City</Label>
							</Button>
						</li>
					</ul>
					<ul class="py-5 flex justify-center relative z-10 mx-5 list-none" >
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="first" >
							<span class="text-black ">Another City</span>
							</Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="second"  >
								<span class="text-black ">Another City</span>
							  </Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="third" >
							  <Label class="text-black ">Another City</Label>
							</Button>
						</li>
					</ul>
					<ul  class="py-5 flex justify-center relative z-10 mx-5 list-none">
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="first" >
							<span class="text-black ">Another City</span>
							</Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="second"  >
								<span class="text-black ">Another City</span>
							  </Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="third" >
							  <Label class="text-black ">Another City</Label>
							</Button>
						</li>
					</ul> 
					<ul class="py-5 flex justify-center relative z-10 mx-5 list-none">
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="first" >
							<span class="text-black ">Another City</span>
							</Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="second"  >
								<span class="text-black ">Another City</span>
							  </Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="third" >
							  <Label class="text-black ">Another City</Label>
							</Button>
						</li>
					</ul>
					<ul class="py-5 flex justify-center relative z-10 mx-5 list-none">
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="first" >
							<span class="text-black ">Another City</span>
							</Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="second"  >
								<span class="text-black ">Another City</span>
							  </Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="third" >
							  <Label class="text-black ">Another City</Label>
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</Menu>

<div class="header-button ">
	<ul class="flex justify-center relative z-10  list-none" >
		<div>
			<li>
				<Button on:click={() => menuTerp.setOpen(true)} class="bg-white mx-1  hover:bg-green-200" id="first" >
				  <span class="text-black ">By Terp</span>
				</Button>
			</li>
				<Menu bind:this={menuTerp} class="w-98 h-98 p-5 button-menu absolute z-20 text-center h-36 overflow-hidden">
					<ul class="flex justify-center relative z-10 mx-5 list-none">
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="first" >
							<span class="text-black ">By Terp</span>
							</Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="second"  >
								<span class="text-black ">By Terp</span>
							  </Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="third" >
							  <Label class="text-black ">By Terp</Label>
							</Button>
						</li>
					</ul>
					<ul> 
						<li>
							<Button on:click={() => menu.setOpen(true)} class=" mt-10 mx-1  bg-green-200" id="third" >
							  <Label class="text-black ">More</Label>
							</Button>
						</li>
					</ul>
				</Menu>	
		</div>

		<div>
			<li>
				<Button on:click={() => menuEffect.setOpen(true)} class="bg-white mx-1  hover:bg-green-200" id="second"  >
				  <span class="text-black ">by effect</span>
				</Button>
			</li>
				<Menu bind:this={menuEffect} class="w-98 h-98 button-menu p-5 absolute z-20 text-center d-flex justify-center h-36 overflow-hidden ">
					<ul class="flex justify-center relative z-10 mx-5 list-none">
						<li>
							<Button on:click={() => menuTerp.setOpen(true)} class="mx-1  bg-green-200" id="first" >
							<span class="text-black ">An Effect</span>
							</Button>
						</li>
						<li>
							<Button on:click={() => menuEffect.setOpen(true)} class="mx-1  bg-green-200" id="second"  >
								<span class="text-black ">An Effect</span>
							  </Button>
						</li>
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" >
							  <Label class="text-black ">An Effect</Label>
							</Button>
						</li>
					</ul>

					<ul> 
						<li>
							<Button on:click={() => menu.setOpen(true)} class="mt-10 mx-1  bg-green-200" id="third" >
							  <Label class="text-black ">More</Label>
							</Button>
						</li>
					</ul>
				</Menu>
		</div>
				<div>
					<li>
						<Button on:click={() => menuType.setOpen(true)} class="bg-white  mx-1  hover:bg-green-200" id="third" >
						  <Label class="text-black ">by type</Label>
						</Button>
					</li>
						<Menu bind:this={menuType} class="w-98 h-98 p-5 absolute z-20 text-center button-menu  overflow-hidden">
							<ul class="flex justify-center relative z-10 mx-5 list-none">
								<li>
									<Button on:click={() =>  menu.setOpen(true)} class="mx-1  bg-green-200" id="first" >
									<span class="text-black ">fruits</span>
									</Button>
								</li>
								<li>
									<Button on:click={() =>  menu.setOpen(true)} class="mx-1  bg-green-200" id="second"  >
										<span class="text-black ">veggies</span>
									  </Button>
								</li>
								<li>
									<Button on:click={() => menu.setOpen(true)} class="mx-1  bg-green-200" id="third" >
									  <Label class="text-black ">herbs</Label>
									</Button>
								</li>
							</ul>
							<ul> 
								<li>
									<Button on:click={() => menu.setOpen(true)} class="mx-1 mt-10 bg-green-200" id="third" >
									  <Label class="text-black ">More</Label>
									</Button>
								</li>
							</ul>
						</Menu>
				</div>

				
				<div>
					<li>
						<Button on:click={() => rangeSlider.setOpen(true)} class="bg-white mx-1  hover:bg-green-200" id="four" >
						  <Label class="text-black ">Min/Max</Label>
						</Button>
					</li>
<Menu bind:this={rangeSlider} class="w-98 h-98 button-menu overflow-hidden  p-5 absolute z-20 text-center range-slider">
					
<input type="range" bind:value={percent} style="filter: hue-rotate(-{percent}deg)"/>
<div id="h4-container">
	<div id="h4-subcontainer">
		<!-- neex to fix `left` style on h4 element, or maybe reseting marting on parent el -->
		<h4 style="transform: translateX(-0%) scale({1+(percent/100)}); left: calc(-6% + {percent}%);" class="w-12">
			<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="width: 14em;height: 6em;vertical-align: middle;fill: currentColor;overflow: hidden; filter: hue-rotate(-{percent}deg)" viewBox="0 0 1024 1024" version="1.1">
			<path   class=" fill-blue-500"  d="M896 455.111111c-17.066667 0-34.133333 2.844444-51.2 11.377778 5.688889-11.377778 8.533333-25.6 8.533333-39.822222 0-62.577778-51.2-113.777778-113.777777-113.777778-25.6 0-45.511111 8.533333-65.422223 19.911111C645.688889 224.711111 546.133333 142.222222 426.666667 142.222222c-142.222222 0-256 113.777778-256 256 0 11.377778 0 22.755556 2.844444 31.288889-11.377778-2.844444-19.911111-2.844444-31.288889-2.844444-79.644444 0-142.222222 62.577778-142.222222 142.222222s62.577778 142.222222 142.222222 142.222222h753.777778c71.111111 0 128-56.888889 128-128S967.111111 455.111111 896 455.111111z" fill=""/></svg>
				<div class="absolute">
					{percent}
				</div>
			
			<span style="filter: hue-rotate(-{percent}deg)"></span>
		</h4>
		</div>	
	</Menu> 	
	</ul>
</div>
		<div class="solo-demo-container solo-container">
		<div class="flex items-center">
			<input type="serch"  bind:value
			on:keydown={handleKeyDown}
			placeholder="Search"
			class="p-2 rounded-md focus:outline-none"
			>
			<div class="ml-2"   on:click={doSearch}
			disabled={value === ''}>
				<img src={next} alt="next" />
			  </div>
		  </div>
			  
		</div>		
	<div>
		<div class="flex ">
			<h2 class="text-white text-lg font-bold">Welcome, John Snow</h2>
			<div class="animate-ping w-2 max-h-2 relative rounded-full bg-green-300"></div>
		</div>
		<span class="font-score text-white text-sm ">999,999,999.99</span>
	</div>
	</ul>
</header>


