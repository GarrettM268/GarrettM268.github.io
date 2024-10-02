<template>
	<article class="max-h-screen w-full flex px-40 pt-20  gap-4 text-slate-500">
		<div id="menu" class="h-full w-1/2 flex-items-center justify-center">
			<div id="name">
				<div class="font-size-huge mb-5 text-white"> Garrett Mullings </div>
				<div class="font-size-large mb-4 text-white"> Aspiring Frontend Developer </div>
				<div class="font-size-small mb-2"> Learning while building reliable and beautiful UIs. </div>
			</div>
			
			<ul>
				<li 
					class="flex items-center gap-1"
					:class="{ 'active': currentSection === 'about' }"
					@click="scrollToSection('about')"
				> 
					<div class="line"></div> 
					<span> About </span> 
				</li>
				<li 
					class="flex items-center gap-1"
					:class="{ 'active': currentSection === 'education' }"
					@click="scrollToSection('education')"
				> 
					<div class="line"></div> 
					<span> Education </span>  
				</li>
				<li 
					class="flex items-center gap-1"
					:class="{ 'active': currentSection === 'work-experience' }"
					@click="scrollToSection('work-experience')"
				>
					<div class="line"></div> 
					<span> Work Experience </span> 
				</li>
			</ul>
		</div>
		<div id="content" class="max-h-full overflow-auto w-1/2">
			<section id="about" class="about p-4 font-size-tiny">
				<div class="pb-10">
					I wrote my first lines of code my final year of highschool, when my shool offered its first ever programming class. Fast forward to today, and I am graduating with a Bachelor of Science in computer science from Montana State University. During my journey at MSU, I was exposed to dozens of programming languages, and I ultimately found a passion in web development - I was hooked on the creative process of creating UIs, along with the problem solving challenge that comes with app development.
				</div>
				<div class="pb-10">
					After my junior year at Montana State I was fortunate to work a summer internship with Status Controls, a software company based in Washington. There, I developed web applications using VueJS. I worked as part of a small team, where we created custom HTML5 applications that interact with crestron control processors to control audio, video, and other devices in commercial and residential buildings. I was able to learn a lot about the software development process, and I was able to see the impact of my work in the real world. As of fall 2024, I am finishing up the last 6 credits of my degree while working full time as an entry level developer with Status Controls. 
				</div>
				<div class="pb-20">
					When Im not at my computer, I spend as much time in the mountains as possible. I love to ski, hunt, camp and backpack, climb both rocks and ice, and pretty much any other pursuit that gets me outside and active.
				</div>
			</section>
			<section id="education" class="pb-20">
				<Card 
					:tags="['csci331', 'csci440', 'esof322', 'csci466', 'csci468', 'csci495']" 
					size="full-width"
				>
					<template #dates>2020 - 2024</template>
					<template #title> 
						<span> B.Sc - Computer Science </span>	
						<span> Montana State University </span>
					</template>
					<template #content>
						Some Relevant Coursework:
						<ul>
							<li> Full Stack Web Development </li>
							<li> Database Systems </li>
							<li> Software Engineering </li>
							<li> Networks </li>
							<li> Compilers </li>
							<li> Lab Assistant</li>
						</ul>
					</template>
				</Card>
			</section>
			<section id="work-experience" class="flex flex-col gap-10 pb-20">
				<Card 
				:tags="['VueJs', 'HTML', 'CSS', 'JavaScript']" 
				size="full-width"
				>
				<template #dates>May 2023 - August 2023</template>
				<template #title> 
					<span> Internship </span>
					<span> Status Controls </span>
				</template>
				<template #content>
					During this internship, I Learned VueJS, and Gained much more experience developing with HTML/CSS/JS. I learned how to work in a professional software development environment, where I createed Vue components for use in custom web applications. The web applications communicate with Crestron control processors to control AV systems in stadiums, lecture halls, conference rooms, and homes.
				</template>
				</Card>
				<Card 
					:tags="['VueJs', 'HTML', 'CSS', 'JavaScript', 'WS', 'Cypress', 'Docker', 'Prisma']" 
					size="full-width"
				>
					<template #dates>May 2024 - Present</template>
					<template #title> 
						<span> Entry Level Software Developer </span>	
						<span> Status Controls </span>
					</template>
					<template #content>
						After my internship, I was able to come back as a full time developer for StatusControls. As an entry level developer, i have had the oppurtunity to have full autonomy when designing a UI for a client. I got to go through the creative process of UI design, plan the architecture of the front end, and implement the design on my own. I also had the opputunity to fully design and implement multiple new features as requested by clients, under the supervision of a senior developer.
					</template>
				</Card>
			</section>
		</div>
	</article>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Card from '@/components/Card.vue';
const currentSection = ref('about');

const scrollToSection = (sectionId) => {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
		currentSection.value = sectionId;
		console.log('section', currentSection.value);
	}
};

const observeSections = () => {
	const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    currentSection.value = entry.target.id;
                }
            });
        },
        {
            rootMargin: '75% 0px 0px 0px',
            threshold: 0.2 // Adjust threshold as needed
        }
    );
	
	sections.forEach(section => observer.observe(section));
		
	return () => {
		sections.forEach(section => observer.unobserve(section));
	};
};

onMounted(() => {
	const unobserve = observeSections();
	onUnmounted(() => {
		unobserve();
	});
});
</script>

<style scoped>

</style>