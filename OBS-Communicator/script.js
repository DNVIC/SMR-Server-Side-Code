function startConnecting() {
    const obs = new OBSWebSocket();

    var ip = document.getElementById("03d").value
    console.log("Chosen IP Address:" + ip );
    var port = document.getElementById("03e").value
    console.log("Chosen Port:" + port);



    obs.connect({ address: ip + ":" + port, password: '123454321' })
    .then(() => {
        console.log("connected successfully");
        return obs.send('GetSceneItemProperties', {
            'item': "0"
        });
    })
    .then(data => {
        prop0 = data;

        return obs.send('GetSceneItemProperties', {
            'item': "1"
        });



    })
    .then(datt => {
        prop1=datt;
        console.log(prop0);
        console.log(prop1);
        console.log(prop0.position.x);
        obs.send('SetSceneItemProperties', {
            "item": "0",
            "position.x": 523,
            "position.y": 250
            /*"position.alignment": prop1.position.y,
            "rotation": prop1.rotation,
            "scale.x": prop1.scale.x,
            "scale.y": prop1.scale.y,
            "crop.top":prop1.crop.top,
            "crop.bottom":prop1.crop.bottom,
            "crop.left":prop1.crop.left,
            "crop.right":prop1.crop.right,
            "visible": prop1.visible,
            "locked": prop1.locked,
            "bounds.type": prop1.bounds.type,
            "bounds.alignment": prop1.bounds.alignment,
            "bounds.x": prop1.bounds.x,
            "bounds.y": prop1.bounds.y */
        });
        obs.send('SetSceneItemProperties', {
            "item": "1",
            "position.x": prop0.position.x,
            "position.y": prop0.position.y,
            /*"position.alignment": prop0.position.y,
            "rotation": prop0.rotation,
            "scale.x": prop0.scale.x,
            "scale.y": prop0.scale.y,
            "crop.top":prop0.crop.top,
            "crop.bottom":prop0.crop.bottom,
            "crop.left":prop0.crop.left,
            "crop.right":prop0.crop.right,
            "visible": prop0.visible,
            "locked": prop0.locked,
            "bounds.type": prop0.bounds.type,
            "bounds.alignment": prop0.bounds.alignment,
            "bounds.x": prop0.bounds.x,
            "bounds.y": prop0.bounds.y*/
        })
    })
    .then(data =>{

    })
    .catch(err => {
        console.log(err);
    });
    
    obs.on('error', err=> {
        console.error('socket error:', err)
    });
}



