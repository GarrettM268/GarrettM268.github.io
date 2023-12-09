<template>
	<div class="header-container">
		<HeaderBar/>
	</div>
	<div class="main-text">
		<p>
			Due to budget, time, and technical limitations, in order for a demo of the app please view 
			<a href="https://github.com/GarrettM268/vue-todo-app"> the Github Repo for the app</a>.
			The README contains instructions to demo the project. I hope to have live demos of this and multiple other 
			small apps demonstrateding my technical Posted soon! (Last updated 11-28-2023)
			<br><br>
			Currently, this page will serve as a walk through of my development process, as well as my decision making
			regarding the UI Design.
			<br><br>
			While this is a rather small project lacking a live server for the backend, It still allowed me oppurtunities
			to consider UI design principles to make the app user friendly. This app was my very first foray into Web Apps
			And UI Design, and therefore is lacking in some areas. Those areas, and the improvements I intend to make as I
			add to this portfolio will be addressed at the bottom of this page.
			<br><br>
		</p>
		<h3>STAGE 1</h3>
		<p>
			The goal of this app was originally to gain technical skills with vue3, and to learn the composition API after
			having learned vue originally with vue2 and the options API. After completing the technical aspects of the 
			project, and having a functional app, I realized I could take it further. I decided to see haw for I could go
			with this simple of an application. It turned out that having a simple app for a simple purpose allowed me to
			really focus on optimizing it for usability. 
			<br>
			The first thing I wanted to do was to learn how I could make improvements over other ToDo apps. In order to do this,
			I wanted to see what someones very first experience with a To-do app would look like, and see what they may be
			confused by. So, I chose a very popular app: Apples reminder app. I also looked at Apples note-taking app, as they both
			are frequently used to create to-do apps. Next, I had one of my friends who has exclusively used android phones his
			whole life attempt to open the app and create a few reminders or notes. afterwards, I had a discussion about what 
			was easy and what may have been difficult or annoying about the process.
		</p>
			<table>
				<tr>
					<th>What went well</th>
					<th>Grievances/Annoyances</th>
				</tr>
				<tr>
					<td>Organizing notes/apps</td>
					<td>Figuring out how to create the first note/app</td>
				</tr>
			</table>
		<h3>STAGE 2</h3>
		<p>
			As this mini project was my first real attempt at following any type of UI design principles, I decided to just focus on
			that first con. The opening menu seemed to be a bit complex for a new user, so I aimed to simplify that. Therefore, the
			main need of the user I will be focusing on is that of a simple, intuitive and easy ot use UI. In the apple app,
			the interviewee felt they were bombarded with lots of options: account info, collection of notes, and other things. 
			Therefore, the goal of this app will be to create a simple app that is as clear as possible about what it does, and how to
			use it. When I was doing some research on UI design, I came across an idea: the apps controls should be clear enough that
			usage should be minimally impacted by language barriers. This idea resonated with me, and became my goal for satisfying 
			users needs.
		</p>
		<h3>STAGE 3</h3>
		<p>
			Now, I focused in on what an app that is so clear in its controls that language barriers minimally affect usage looks
			like. I decided that that will really depend on having the users most wanted features, in this case, creating todo items.
			I also drew multiple ideas for icons that I thought would clearly communicate their purpose when used on buttons. in
			the end, I once again had my the original interviewee help. I had him guess what each Icon meant, and went with the
			options he chose
		</p>
		<h3>STAGE 4</h3>
		<p>
			As far as prototyping goes, since this project was more of a revision of a previous application, that was used as the 
			prototype. 
			<br>
			note: as this was project was mostly completed before I took the UI Design course at MSU, A copy of the prototype was not
			preserved.
		</p>
		<h3>STAGE 5</h3>
		<p class="bottom-text">
			Lastly, I will discuss testing. Again, I was able to use the same interviewee who helped in the beginning. I simply
			repeated the same task as in the beginning. The interviewee was able to create a todo much faster, with no missclicks.
			They also reported that the controls were intuitive, and they were able to find what they wanted to quickly!
			<br><br>
			Moving forwards, I would be curious to find out if a language barrier would significantly impact usage of the app by
			by having a non english speaker, or someone who learned english as a second language test the app.
		</p>
	</div>
</template>

<script setup>
	import HeaderBar from '../HeaderBar.vue';
</script>

<style scoped>
	table, td, th {
		border: 1px solid white;
	}
	table {
		margin-left: 5rem;
	}

	.main-text {
		padding-right: 5rem;
		padding-left: 5rem;
		padding-top: 5vh;
		padding-bottom: 5rem;
		margin-top: 35vh;
		background-color: darkslategray;
	}
	
	a {
		color:rgb(161, 208, 255);
	}
</style>