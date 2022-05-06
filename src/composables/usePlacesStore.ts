import { computed, onMounted } from "vue"
import { StateInterface } from "@/store"
import { useStore } from "vuex"

export const usePlacesStore = () => {

    const store = useStore<StateInterface>()

    onMounted(()=>{
         if(!store.getters['places/isUserLocationReady']){
            store.dispatch('places/getInitialLocation')
         }
    })

    //state
    const isLoading = computed(() => {
        return store.state.places.isLoading
    })
    const userLocation = computed(()=> {
        return store.state.places.userLoacation
    })

    //getters
    const isUserLocationReady = computed<boolean>(()=> {
        return store.getters['places/isUserLocationReady']
    })

    return{
        isLoading,
        userLocation,
        isUserLocationReady
    }
}