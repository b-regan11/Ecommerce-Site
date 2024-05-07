import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import SearchResultsView from '../views/SearchResults.vue'
import CartView from '../views/Cart.vue'

import FireTVView from '../views/ProductPages/Electronics/FireTV.vue'
import AirPodsView from '../views/ProductPages/Electronics/AirPods.vue'
import iPadView from '../views/ProductPages/Electronics/iPad.vue'
import iPhoneView from '../views/ProductPages/Electronics/iPhone.vue'
import AppleWatchView from '../views/ProductPages/Electronics/AppleWatch.vue'
import DesktopView from '../views/ProductPages/Electronics/Desktop.vue'

import ChairView from '../views/ProductPages/Office/Chair.vue'
import NotepadView from '../views/ProductPages/Office/Notepad.vue'
import PaperView from '../views/ProductPages/Office/Paper.vue'
import PedestalFanView from '../views/ProductPages/Office/PedestalFan.vue'
import PensView from '../views/ProductPages/Office/Pens.vue'
import PrinterView from '../views/ProductPages/Office/Printer.vue'
import ShredderView from '../views/ProductPages/Office/Shredder.vue'

import C4PreWorkoutView from '../views/ProductPages/Outdoors/C4PreWorkout.vue'
import DuffleBagView from '../views/ProductPages/Outdoors/DuffleBag.vue'
import ExerciseBikeView from '../views/ProductPages/Outdoors/ExerciseBike.vue'
import GatoradeBottleView from '../views/ProductPages/Outdoors/GatoradeBottle.vue'
import MountainBikeView from '../views/ProductPages/Outdoors/MountainBike.vue'
import ResistantBandsView from '../views/ProductPages/Outdoors/ResistantBands.vue'
import StanleyCupView from '../views/ProductPages/Outdoors/StanleyCup.vue'

import PS5View from '../views/ProductPages/VideoGames/PS5.vue'
import Quest3View from '../views/ProductPages/VideoGames/Quest3.vue'
import SwitchView from '../views/ProductPages/VideoGames/Switch.vue'
import XboxXView from '../views/ProductPages/VideoGames/XboxX.vue'



const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/results', name: 'results', component: SearchResultsView, props: true },
  { path: '/cart', name: 'cart', component: CartView },

  { path: '/firetv', name: 'firetv', component: FireTVView },
  { path: '/airpods', name: 'airpods', component: AirPodsView },
  { path: '/ipad', name: 'ipad', component: iPadView },
  { path: '/iphone', name: 'iphone', component: iPhoneView },
  { path: '/applewatch', name: 'applewatch', component: AppleWatchView },
  { path: '/desktop', name: 'desktop', component: DesktopView },
  
  { path: '/pedestalfan', name: 'pedestalfan', component: PedestalFanView },
  { path: '/chair', name: 'chair', component: ChairView },
  { path: '/notepad', name: 'notepad', component: NotepadView },
  { path: '/shredder', name: 'shredder', component: ShredderView },
  { path: '/pens', name: 'pens', component: PensView },
  { path: '/paper', name: 'paper', component: PaperView },
  { path: '/printer', name: 'printer', component: PrinterView },
  
  { path: '/dufflebag', name: 'dufflebag', component: DuffleBagView },
  { path: '/c4preworkout', name: 'c4preworkout', component: C4PreWorkoutView },
  { path: '/gatoradebottle', name: 'gatoradebottle', component: GatoradeBottleView },
  { path: '/mountainbike', name: 'mountainbike', component: MountainBikeView },
  { path: '/stanleycup', name: 'stanleycup', component: StanleyCupView },
  { path: '/exercisebike', name: 'exercisebike', component: ExerciseBikeView },
  { path: '/resistantbands', name: 'resistantbands', component: ResistantBandsView },
  
  { path: '/quest3', name: 'quest3', component: Quest3View },
  { path: '/switch', name: 'switch', component: SwitchView },
  { path: '/PS5', name: 'PS5', component: PS5View },
  { path: '/xbox', name: 'xbox', component: XboxXView }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
