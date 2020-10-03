import Homepage from './Homepage.vue'
import Roverpage from './Roverpage.vue'

export default[
    { 
        path: '/', 
        component: Homepage, 
        meta: {
            title: 'Rover in Mars | Homepage',
        }
    },
    { 
        path: '/rover', 
        component: Roverpage,
        meta: {
            title: 'Rover in Mars | Roverpage',
        }
    }
]