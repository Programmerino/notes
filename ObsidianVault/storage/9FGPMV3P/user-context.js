try {
window.experiments = {"assignments":[{"payload":"{}","assignment":"control","experimentLabel":"wired-personalized-recirc-test","bucketLabel":"control","status":"NEW_ASSIGNMENT","applicationName":"Verso","pageName":"wired","userID":"495fa976-9c76-4aab-9773-91bece388749"}]};
window.cnBus && window.cnBus.emit('experiments.assignments.updated', window.experiments);
window.sparrowQueue && window.sparrowQueue.push(() => {  window.sparrow.track('general', 'assigned-experiments', {dim1 : JSON.stringify(window.experiments)}); });

          document.cookie = "CN_segments=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure";
        
} catch (uce) { console.log('user context error:', uce)}