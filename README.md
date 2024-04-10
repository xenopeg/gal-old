# Gal

A gallery for pretty much everything that just kinda doubles as a knowledge base.

Goal is to support booru-style tags for most kinda of data, be it Markdown, 
images, videos, or 3D models, and allow the creation of "Collections", which
defines how it gets displayed.

In the future it should also allow the creation of public galleries for sharing
one's work.

A remake of an old Rust egui project of mine that never really went anywhere.

### Progress

#### Current State

Barely more than a skeleton right now.

#### ToDo

- [ ] Auth
  - [ ] Permission system
- [ ] Database Structure
  - [ ] Tags
  - [ ] Galleries
- [ ] Plain file structure
  - [ ] Based on simplified versions of names
  - [ ] Backing up this structure should keep all the data intact, even if Gal db is lost
- [ ] UI
  - [ ] Data displays
    - [ ] Images
    - [ ] Video
    - [ ] Markdown
      - [ ] Support linking other data
    - [ ] 3D models

