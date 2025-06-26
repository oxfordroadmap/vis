---
aliases: ["/en/LiaoHT/","/en/Liao%20Han-Teng"]
title: 'Experience'
date: 2023-10-24
type: landing

design:
  spacing: '1.2rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks-blue.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      # date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  - block: resume-awards
    content:
      title: Awards
      username: admin
    design:
      css_class: hbb-section-thin
      back_ground: 
        color: hsla(from currentColor h s l, 0.9)
        gradient_start: hsla(from currentColor h s l, 0.01)
        gradient_end: hsla(from currentColor h s l, 0.1)
        gradient_angle: 120
        css_style: 'background: hsla(from currentColor h s l, 0.1);'
  - block: resume-skills
    content:
      title: skillsets
      username: admin
    design:
      show_skill_percentage: false
      css_class: hbb-section
  - block: resume-languages
    content:
      title: Languages
      username: admin
---
