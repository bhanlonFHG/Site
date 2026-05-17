/* FHG Builders — Portfolio Scripts */

const PROJECTS = {
  "kerr": {"name":'Kerr Gulch',"location":'Evergreen, CO',"type":'Custom Build',"desc":'A mountain modern custom home built into the Colorado foothills. Stone and steel exterior, wine cellar, spa bathroom, and panoramic views — designed for the way its owners actually live.',"cover":"images/residential/cover-kerr.jpg","count":26 },
  "long": {"name":'Long Renovation',"location":'Denver Metro, CO',"type":'Renovation',"desc":'A complete exterior and landscape transformation that reimagined a dated home into a timber-and-stone showpiece. New entry, patios, lighting, and landscaping — top to bottom.',"cover":"images/residential/cover-long.jpg","count":16 },
  "steele": {"name":'Steele Street',"location":'Denver, CO',"type":'Custom Build',"desc":"A three-story urban modern custom home in one of Denver's most sought-after neighborhoods. Clean lines, stone accents, and floor-to-ceiling windows designed for city living.","cover":"images/residential/cover-steele.jpg","count":6 },
  "cherry": {"name":'Cherry Hills Village',"location":'Cherry Hills Village, CO',"type":'Custom Build',"desc":"Ground-up custom build in one of the Denver metro's premier neighborhoods. Cathedral ceilings with exposed beams, an open great room, and a stone fireplace that anchors the entire home.","cover":"images/residential/cover-cherry.jpg","count":15 },
  "hartline": {"name":'Hartline Residence',"location":'Conifer, CO',"type":'Custom Build',"desc":'A dramatic mountain custom home featuring a two-story stone fireplace, barn door details, floor-to-ceiling windows, and an open plan designed to frame the surrounding landscape.',"cover":"images/residential/cover-hartline.jpg","count":2 },
  "arvada": {"name":'Arvada Renovation',"location":'Arvada, CO',"type":'Renovation',"desc":'A whole-home renovation that touched every room — kitchen, bathrooms, living areas, and exterior. New layout, new finishes, and a level of craft that turned a good house into a great one.',"cover":"images/residential/cover-arvada.jpg","count":34 },
  "locust": {"name":'Locust Street Poptop',"location":'Denver, CO',"type":'Addition & Renovation',"desc":"A second-story addition — known in Denver as a poptop — that doubled the home's square footage while giving it an entirely new identity. Modern farmhouse exterior with a refreshed open interior.","cover":"images/residential/cover-locust.jpg","count":5 },
  "denver_kb": {"name":'Denver Kitchen & Bath',"location":'Denver, CO',"type":'Renovation',"desc":'A high-end kitchen and bath transformation in the heart of Denver. Custom cabinetry, quartz countertops, designer lighting, and a layout rethought for the way a modern family actually cooks.',"cover":"images/residential/cover-denver_kb.jpg","count":13 },
  "duke": {"name":'Duke Renovation',"location":'Denver Metro, CO',"type":'Renovation',"desc":'A bold kitchen renovation anchored by brass lantern pendants, white cabinetry, and a sleek black island. Every detail chosen to balance elegance with everyday function.',"cover":"images/residential/cover-duke.jpg","count":6 },
  "kampen": {"name":'Kampen Bathroom',"location":'Denver Metro, CO',"type":'Renovation',"desc":"A master bath renovation that replaced an outdated space with clean lines, matte black fixtures, quartz surfaces, and an arched mirror that became the room's focal point.","cover":"images/residential/cover-kampen.jpg","count":2 },
  "saddle": {"name":'Saddle Ridge Bathroom',"location":'Sedalia, CO',"type":'Renovation',"desc":'A full bathroom renovation in a mountain property — sliding glass shower enclosure, vessel sink, and updated vanity that brings modern comfort to a rustic Colorado setting.',"cover":"images/residential/cover-saddle.jpg","count":6 },
};

const GALLERIES = {
  "arvada": ["images/residential/gallery-arvada/01.jpg", "images/residential/gallery-arvada/02.jpg", "images/residential/gallery-arvada/03.jpg", "images/residential/gallery-arvada/04.jpg", "images/residential/gallery-arvada/05.jpg", "images/residential/gallery-arvada/06.jpg", "images/residential/gallery-arvada/07.jpg", "images/residential/gallery-arvada/08.jpg", "images/residential/gallery-arvada/09.jpg", "images/residential/gallery-arvada/10.jpg", "images/residential/gallery-arvada/11.jpg", "images/residential/gallery-arvada/12.jpg", "images/residential/gallery-arvada/13.jpg", "images/residential/gallery-arvada/14.jpg", "images/residential/gallery-arvada/15.jpg", "images/residential/gallery-arvada/16.jpg", "images/residential/gallery-arvada/17.jpg", "images/residential/gallery-arvada/18.jpg", "images/residential/gallery-arvada/19.jpg", "images/residential/gallery-arvada/20.jpg", "images/residential/gallery-arvada/21.jpg", "images/residential/gallery-arvada/22.jpg", "images/residential/gallery-arvada/23.jpg", "images/residential/gallery-arvada/24.jpg", "images/residential/gallery-arvada/25.jpg", "images/residential/gallery-arvada/26.jpg", "images/residential/gallery-arvada/27.jpg", "images/residential/gallery-arvada/28.jpg", "images/residential/gallery-arvada/29.jpg", "images/residential/gallery-arvada/30.jpg", "images/residential/gallery-arvada/31.jpg", "images/residential/gallery-arvada/32.jpg", "images/residential/gallery-arvada/33.jpg", "images/residential/gallery-arvada/34.jpg"],
  "cherry": ["images/residential/gallery-cherry/01.jpg", "images/residential/gallery-cherry/02.jpg", "images/residential/gallery-cherry/03.jpg", "images/residential/gallery-cherry/04.jpg", "images/residential/gallery-cherry/05.jpg", "images/residential/gallery-cherry/06.jpg", "images/residential/gallery-cherry/07.jpg", "images/residential/gallery-cherry/08.jpg", "images/residential/gallery-cherry/09.jpg", "images/residential/gallery-cherry/10.jpg", "images/residential/gallery-cherry/11.jpg", "images/residential/gallery-cherry/12.jpg", "images/residential/gallery-cherry/13.jpg", "images/residential/gallery-cherry/14.jpg", "images/residential/gallery-cherry/15.jpg"],
  "denver_kb": ["images/residential/gallery-denver_kb/01.jpg", "images/residential/gallery-denver_kb/02.jpg", "images/residential/gallery-denver_kb/03.jpg", "images/residential/gallery-denver_kb/04.jpg", "images/residential/gallery-denver_kb/05.jpg", "images/residential/gallery-denver_kb/06.jpg", "images/residential/gallery-denver_kb/07.jpg", "images/residential/gallery-denver_kb/08.jpg", "images/residential/gallery-denver_kb/09.jpg", "images/residential/gallery-denver_kb/10.jpg", "images/residential/gallery-denver_kb/11.jpg", "images/residential/gallery-denver_kb/12.jpg", "images/residential/gallery-denver_kb/13.jpg"],
  "duke": ["images/residential/gallery-duke/01.jpg", "images/residential/gallery-duke/02.jpg", "images/residential/gallery-duke/03.jpg", "images/residential/gallery-duke/04.jpg", "images/residential/gallery-duke/05.jpg", "images/residential/gallery-duke/06.jpg"],
  "hartline": ["images/residential/gallery-hartline/01.jpg", "images/residential/gallery-hartline/02.jpg"],
  "kampen": ["images/residential/gallery-kampen/01.jpg", "images/residential/gallery-kampen/02.jpg"],
  "kerr": ["images/residential/gallery-kerr/01.jpg", "images/residential/gallery-kerr/02.jpg", "images/residential/gallery-kerr/03.jpg", "images/residential/gallery-kerr/04.jpg", "images/residential/gallery-kerr/05.jpg", "images/residential/gallery-kerr/06.jpg", "images/residential/gallery-kerr/07.jpg", "images/residential/gallery-kerr/08.jpg", "images/residential/gallery-kerr/09.jpg", "images/residential/gallery-kerr/10.jpg", "images/residential/gallery-kerr/11.jpg", "images/residential/gallery-kerr/12.jpg", "images/residential/gallery-kerr/13.jpg", "images/residential/gallery-kerr/14.jpg", "images/residential/gallery-kerr/15.jpg", "images/residential/gallery-kerr/16.jpg", "images/residential/gallery-kerr/17.jpg", "images/residential/gallery-kerr/18.jpg", "images/residential/gallery-kerr/19.jpg", "images/residential/gallery-kerr/20.jpg", "images/residential/gallery-kerr/21.jpg", "images/residential/gallery-kerr/22.jpg", "images/residential/gallery-kerr/23.jpg", "images/residential/gallery-kerr/24.jpg", "images/residential/gallery-kerr/25.jpg", "images/residential/gallery-kerr/26.jpg"],
  "locust": ["images/residential/gallery-locust/01.jpg", "images/residential/gallery-locust/02.jpg", "images/residential/gallery-locust/03.jpg", "images/residential/gallery-locust/04.jpg", "images/residential/gallery-locust/05.jpg"],
  "long": ["images/residential/gallery-long/01.jpg", "images/residential/gallery-long/02.jpg", "images/residential/gallery-long/03.jpg", "images/residential/gallery-long/04.jpg", "images/residential/gallery-long/05.jpg", "images/residential/gallery-long/06.jpg", "images/residential/gallery-long/07.jpg", "images/residential/gallery-long/08.jpg", "images/residential/gallery-long/09.jpg", "images/residential/gallery-long/10.jpg", "images/residential/gallery-long/11.jpg", "images/residential/gallery-long/12.jpg", "images/residential/gallery-long/13.jpg", "images/residential/gallery-long/14.jpg", "images/residential/gallery-long/15.jpg", "images/residential/gallery-long/16.jpg"],
  "saddle": ["images/residential/gallery-saddle/01.jpg", "images/residential/gallery-saddle/02.jpg", "images/residential/gallery-saddle/03.jpg", "images/residential/gallery-saddle/04.jpg", "images/residential/gallery-saddle/05.jpg", "images/residential/gallery-saddle/06.jpg"],
  "steele": ["images/residential/gallery-steele/01.jpg", "images/residential/gallery-steele/02.jpg", "images/residential/gallery-steele/03.jpg", "images/residential/gallery-steele/04.jpg", "images/residential/gallery-steele/05.jpg", "images/residential/gallery-steele/06.jpg"],
};

let currentProject = null;
let lightboxIndex  = 0;
let lightboxImages = [];

function openProject(key) {
  const p   = PROJECTS[key];
  const imgs = GALLERIES[key];
  currentProject = key;
  document.getElementById('proj-hero-img').src = imgs[0];
  document.getElementById('proj-hero-img').alt = p.name;
  document.getElementById('proj-type').textContent = p.type;
  document.getElementById('proj-name').textContent = p.name;
  document.getElementById('proj-loc').textContent  = p.location;
  document.getElementById('proj-desc').textContent = p.desc;
  document.getElementById('gallery-label').textContent = p.count + ' Photos';
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';
  imgs.forEach((src, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.onclick = () => openLightbox(i, imgs);
    const img = document.createElement('img');
    img.src = src; img.alt = p.name + ' — photo ' + (i+1);
    img.loading = i < 6 ? 'eager' : 'lazy';
    item.appendChild(img); grid.appendChild(item);
  });
  document.getElementById('view-landing').style.display = 'none';
  document.getElementById('view-project').style.display  = 'block';
  document.getElementById('nav-back').style.visibility   = 'visible';
  window.scrollTo({top:0,behavior:'instant'});
}

function showLanding() {
  document.getElementById('view-landing').style.display = 'block';
  document.getElementById('view-project').style.display  = 'none';
  document.getElementById('nav-back').style.visibility   = 'hidden';
  currentProject = null;
  window.scrollTo({top:0,behavior:'instant'});
}

function filterProjects(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proj-card').forEach(card => {
    const t = card.dataset.type;
    card.classList.toggle('hidden', type !== 'all' && !t.includes(type));
  });
}

function openLightbox(index, images) {
  lightboxImages = images; lightboxIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function updateLightbox() {
  document.getElementById('lightbox-img').src = lightboxImages[lightboxIndex];
  document.getElementById('lightbox-counter').textContent = (lightboxIndex+1) + ' / ' + lightboxImages.length;
}
function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  updateLightbox();
}
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key==='ArrowLeft') lightboxNav(-1);
  if (e.key==='ArrowRight') lightboxNav(1);
  if (e.key==='Escape') closeLightbox();
});
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});
