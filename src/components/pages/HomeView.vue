<template>
	<article class="max-h-screen w-full flex pt-20 gap-4">
		<div id="menu" class="h-full w-1/2 flex-items-center justify-center">
			<div id="name">
				<div class="font-size-huge mb-5"> Garrett Mullings </div>
				<div class="font-size-large mb-4"> Website and app developer</div>
			</div>
			
			<ul>
				<li 
					class="flex items-center gap-1"
					:class="{ 'active': currentSection === 'about' }"
					@click="scrollToSection('about')"
				> 
					<div class="line"></div> 
					<span> About Me</span> 
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
		<div id="content" class="max-h-full overflow-auto w-1/2 flex flex-col gap-20 pb-20">
			<section id="about" class="about p-4 pb-20 font-size-tiny flex flex-col gap-10">
				<div>
					I am a soon-to-be computer science graduate, already with about a year of professional experience working for Status Controls. During My time at Status Controls, I had the oppurtunity to work on a variety of projects, rapidly expanding my tool box of technologies. For most projects, I honed my skills using vue3 and javascript to create responsive web applicaitions, as well as CSS and HTML to create visually appealing user interfaces. 
				</div>
				<div>
					I find a lot of satisfaction and enjoyment from seeing ideas and designs come to life through the power of modern web technologies. Aside from the technical aspects of software development, I have always been motivated by the fact so many people seem to hate working with computers and technology - I believe the core purpose of this industry is to make life easier and more enjoyable for people, and I strive to make that a reality in my work.
				</div>
				<div>
					When Im not at my computer, I spend as much time in the mountains as possible. I love to ski, hunt, camp and backpack, climb both rocks and ice, and pretty much any other pursuit that gets me outside and active.
				</div>
			</section>
			<section id="education" class="">
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
			<section id="work-experience" class="flex flex-col gap-10">
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
	
	const sectionThresholds = {
		'about': 0.75,
		'education': 1,
		'work-experience': .75,
	};

	const observers = [];

    sections.forEach((section) => {
        const sectionId = section.id;
        const threshold = sectionThresholds[section] || 0.5; // Default threshold if not specified

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        currentSection.value = entry.target.id;
                    }
                });
            },
            {
                root: null, // Use the viewport as the root
                rootMargin: '0px',
                threshold: threshold
            }
        );

        observer.observe(section);
        observers.push(observer);
    });

    return () => {
        observers.forEach((observer) => {
            sections.forEach((section) => observer.unobserve(section));
        });
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