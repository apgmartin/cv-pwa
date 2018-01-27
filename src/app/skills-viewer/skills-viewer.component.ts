import { Component, OnInit } from '@angular/core';

import { Skill } from './skill.model';

@Component({
  selector: 'app-skills-viewer',
  templateUrl: './skills-viewer.component.html',
  styleUrls: ['./skills-viewer.component.css']
})
export class SkillsViewerComponent implements OnInit {
	skills: Skill[];
	selectedSkill: Skill;

  constructor() { }

  ngOnInit() {
  	this.skills = [
  		new Skill("Web Development", "assets/icons/svg/ic_menu_black.svg", "I have a lot of experience working with web technologies from React to Angular!<br><br>I have a lot of experience working with web technologies from React to Angular!<br><br>I have a lot of experience working with web technologies from React to Angular!<br><br>I have a lot of experience working with web technologies from React to Angular!I have a lot of experience working with web technologies from React to Angular!I have a lot of experience working with web technologies from React to Angular!I have a lot of experience working with web technologies from React to Angular!I have a lot of experience working with web technologies from React to Angular!I have a lot of experience working with web technologies from React to Angular!"),
  		new Skill("Java Springboot APIs", "assets/icons/svg/ic_menu_black.svg", "I have a lot of experience working with Java from springboot to mayhemJava!"),
  		new Skill("Certified Scrum Master", "assets/icons/svg/ic_menu_black.svg", "I have a lot of experience working with scrum methodologies and I am a certified scrum master!"),
  		new Skill("Web Development", "assets/icons/svg/ic_menu_black.svg", "I have a lot of experience working with web technologies from React to Angular!"),
  		new Skill("Web Development", "assets/icons/svg/ic_menu_black.svg", "I have a lot of experience working with web technologies from React to Angular!")
  	]

  	this.selectedSkill = this.skills[0];
  }

  setSelectedSkill(skill: Skill) {
  	this.selectedSkill = skill;
  }

}
