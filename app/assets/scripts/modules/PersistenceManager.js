
import { g } from './GlobalVars';

class PersistenceManager {

    constructor() {
        // Initialize any missing storage elements
        if (!localStorage.getItem('atmospheres')) {
            localStorage.setItem('atmospheres', JSON.stringify([]));
        }
        if (!localStorage.getItem('lockCheckbox')) {
            localStorage.setItem('lockCheckbox', false);
        }
        if (!localStorage.getItem('autoplayCheckbox')) {
            localStorage.setItem('autoplayCheckbox', false);
        }
        if (!localStorage.getItem('globalVolume')) {
            localStorage.setItem('globalVolume', 0.5);
        }
    }

    loadFromStorage() {
        this.loadAtmospheres();
        this.loadLockCheckboxState();
        this.loadAutoplayCheckboxState();
        this.loadGlobalVolume();
    }

    /*
        Records the current state of the app in the browser's localStorage,
        overwriting whatever was previously stored.
        Called whenever a recorded setting is changed.
            (atmosphere volume, atmosphere name, track volume,
            one-shot timing, atmosphere creation/deletion, track creation/deletion)
    */
    storeAtmospheres() {
        var atmospheres = [];
        var currentAtmosphere, currentTrack, collection;
        // Loop through g.am.atmospheres
        for (let atmosphere of g.atmosphereManager.atmospheres) {
            // If the current atmosphere is null, skip it
            if (atmosphere) {
                // Else, reinitialize currentAtmosphere to an empty object
                currentAtmosphere = {};
                currentAtmosphere.name = atmosphere.getTitle();     // Store its name
                currentAtmosphere.volume = atmosphere.am.volume;    // Store its volume
                currentAtmosphere.combinedTracks = [];

                // Loop through the current atmosphere's tracks
                for (let track of atmosphere.tracks) {
                    collection = track.getCollection();
                    currentTrack = {};
                    currentTrack.id = track.data._id;       // Store its id
                    currentTrack.collection = collection;   // Store its collection ('track' or 'oneshot')
                    currentTrack.volume = track.volume;     // Store its volume
                    // If the current track is a one-shot, store its timings
                    if (collection === 'oneshots') {
                        currentTrack.minIndex = track.minIndex;
                        currentTrack.maxIndex = track.maxIndex;
                    }
                    currentAtmosphere.combinedTracks.push(currentTrack);
                }

                atmospheres.push(currentAtmosphere);
            }
        }
        localStorage.setItem('atmospheres', JSON.stringify(atmospheres));
    }

    loadAtmospheres() {
        var atmospheres = JSON.parse(localStorage.getItem('atmospheres'));
        for (let atmosphere of atmospheres) {
            g.atmosphereManager.addAtmosphere(atmosphere, true);
        }
    }

    storeLockCheckboxState(newState) {
        localStorage.setItem('lockCheckbox', newState);
    }

    loadLockCheckboxState() {
        g.sidebar.setLockCheckboxState(JSON.parse(localStorage.getItem('lockCheckbox')));
    }

    storeAutoplayCheckboxState(newState) {
        localStorage.setItem('autoplayCheckbox', newState);
    }

    loadAutoplayCheckboxState() {
        g.setAutoplayCheckboxState(JSON.parse(localStorage.getItem('autoplayCheckbox')));
    }

    storeGlobalVolume(newVolume) {
        localStorage.setItem('globalVolume', newVolume);
    }

    loadGlobalVolume() {
        var globalVolume = localStorage.getItem('globalVolume')
        g.atmosphereManager.$volumeSlider.val(globalVolume);
        g.atmosphereManager.updateGlobalVolume(globalVolume);
    }

}

export default PersistenceManager;