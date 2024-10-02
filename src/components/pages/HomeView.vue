<template>
	<article class="max-h-screen w-full flex px-40 pt-20  gap-4 text-slate-500">
		<div id="menu" class="h-full w-1/2 flex-items-center justify-center">
			<div class="font-size-huge mb-5 text-white"> Garrett Mullings </div>
			<div class="font-size-large mb-4 text-white"> Aspiring Frontend Developer </div>
			<div class="font-size-small mb-2"> Learning while building reliable and beautiful UIs. </div>
			
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
				<div>
					I wrote my first lines of code my final year of highschool, when my shool offered its first ever programming class. Fast forward to today, and I am graduating with a Bachelor of Science in computer science from Montana State University. During my journey at MSU, I was exposed to dozens of programming languages, and I ultimately found a passion in web development - I was hooked on the creative process of creating UIs, along with the problem solving challenge that comes with app development.
				</div>
				<div>
					After my junior year at Montana State I was fortunate to work a summer internship with Status Controls, a software company based in Washington. There, I developed web applications using VueJS. I worked as part of a small team, where we created custom HTML5 applications that interact with crestron control processors to control audio, video, and other devices in commercial and residential buildings. I was able to learn a lot about the software development process, and I was able to see the impact of my work in the real world. As of fall 2024, I am finishing up the last 6 credits of my degree while working full time as an entry level developer with Status Controls. 
				</div>
			</section>
			<section id="education">
				<Card 
					:tags="['csci440', 'csci132']" 
					size="full-width"
				>
					<template #dates>2020 - 2024</template>
					<template #title> 
						<span> B.Sc - Computer Science </span>	
						<span> Montana State University </span>
					</template>
					<template #content>
						Relevant Coursework:
						<ul>
							<li> Full Stack Web Development </li>
							<li> Database Systems </li>
							<li> Software Engineering </li>
							<li> Networks </li>
						</ul>
					</template>
				</Card>
			</section>
			<section id="work-experience">
				<Card 
				:tags="['VueJs', 'HTML', 'CSS', 'JavaScript']" 
				size="full-width"
				>
				<template #dates>May 2023 - august 2023</template>
				<template #title> 
					<span> internship </span>	
					<span> Status Controls </span>
				</template>
				<template #content>
					Learned VueJS/ Learned many wed development technologies, and learned how to work in a professional software development environment. Began creating Vue components for use in custom web applications. The web applicaitons communicate with Crestron control processors to control AV systems. 
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
						Developed web applications that communicate with Crestron control processors to control AV systems. Designed and developed both full UIs and individual components to implement requested features. 
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
	}
};

const observeSections = () => {
	const sections = document.querySelectorAll('section');
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				currentSection.value = entry.target.id;
			}
		});
	}, { threshold: 0.9, rootMargin: '0px' });
	
	sections.forEach(section => observer.observe(section));
	
	const handleScroll = () => {
		let closestSection = null;
		let closestDistance = Infinity;
		
		sections.forEach(section => {
			const rect = section.getBoundingClientRect();
			const distance = Math.abs(rect.top);
			
			if (distance < closestDistance) {
				closestDistance = distance;
				closestSection = section;
			}
		});
		
		if (closestSection) {
			currentSection.value = closestSection.id;
		}
	};
	
	window.addEventListener('scroll', handleScroll);
	
	return () => {
		sections.forEach(section => observer.unobserve(section));
		window.removeEventListener('scroll', handleScroll);
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