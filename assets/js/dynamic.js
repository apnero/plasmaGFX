

			var camera, cubeCamera, scene, renderer;
			var cube, sphere, torus;
			var p= new THREE.Mesh(),
			l= new THREE.Mesh(),
			a= new THREE.Mesh(),
			s= new THREE.Mesh(),
			m= new THREE.Mesh(),
			a2= new THREE.Mesh(),
			g= new THREE.Mesh(),
			r= new THREE.Mesh(),
			a3= new THREE.Mesh(),
			p2= new THREE.Mesh(),
			h= new THREE.Mesh(),
			i= new THREE.Mesh(),
			x= new THREE.Mesh();

			var fov = 70,
			isUserInteracting = false,
			lon = 0, onMouseDownLon = 0,
			lat = 0, onMouseDownLat = 0,
			phi = 0, theta = 0;

			var texture = THREE.ImageUtils.loadTexture( 'assets/gfx/webglbg.jpg', new THREE.UVMapping(), function () {

				init();
				animate();

			} );

			function init() {

				camera = new THREE.PerspectiveCamera( fov, window.innerWidth / window.innerHeight, 1, 1000 );

				scene = new THREE.Scene();

				var mesh = new THREE.Mesh( new THREE.SphereGeometry( 500, 60, 40 ), new THREE.MeshBasicMaterial( { map: texture } ) );
				mesh.scale.x = -1;
				scene.add( mesh );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setSize( window.innerWidth/1.1, window.innerHeight/2 );

				cubeCamera = new THREE.CubeCamera( 1, 1000, 256 );
				cubeCamera.renderTarget.minFilter = THREE.LinearMipMapLinearFilter;
				scene.add( cubeCamera );

				document.getElementById( 'graphix' ).appendChild( renderer.domElement );

		

				var material = new THREE.MeshBasicMaterial( { envMap: cubeCamera.renderTarget } );

				torus = new THREE.Mesh( new THREE.TorusKnotGeometry( 10, 5, 100, 25 ), material );
				scene.add( torus );
var sc = 50;
				var loader = new THREE.JSONLoader();
				loader.load("assets/gfx/models/pgx.PMesh.js", function(geo){
					p.geometry = geo;
					p.material = material;
					p.scale.set( sc, sc, sc );
					p.position.y = 30;
					scene.add( p ); 
					p2.geometry = geo;
					p2.material = material;
					p2.scale.set( sc, sc, sc );
					p2.position.y = -30;
					scene.add( p2 ); 
				});
				loader.load("assets/gfx/models/pgx.LMesh.js", function(geo){
					l.geometry = geo;
					l.material = material;
					l.scale.set( sc, sc, sc );
					l.position.y = 30;
					scene.add( l );  
				});
				loader.load("assets/gfx/models/pgx.AMesh.js", function(geo){
					a.geometry = geo;
					a.material = material;
					a.scale.set( sc, sc, sc );
					a.position.y = 30;
					scene.add( a ); 
					a2.geometry = geo;
					a2.material = material;
					a2.scale.set( sc, sc, sc );
					a2.position.y = 30;
					scene.add( a2 ); 
					a3.geometry = geo;
					a3.material = material;
					a3.scale.set( sc, sc, sc );
					a3.position.y = -30;
					scene.add( a3 ); 
				});
				loader.load("assets/gfx/models/pgx.SMesh.js", function(geo){
					s.geometry = geo;
					s.material = material;
					s.scale.set( sc, sc, sc );
					s.position.y = 30;
					scene.add( s ); 
				});	
				loader.load("assets/gfx/models/pgx.MMesh.js", function(geo){
					m.geometry = geo;
					m.material = material;
					m.scale.set( sc, sc, sc );
					m.position.y = 30;
					scene.add( m ); 
				});	
				loader.load("assets/gfx/models/pgx.GMesh.js", function(geo){
					g.geometry = geo;
					g.material = material;
					g.scale.set( sc, sc, sc );
					g.position.y = -30;
					scene.add( g ); 
				});				
				loader.load("assets/gfx/models/pgx.RMesh.js", function(geo){
					r.geometry = geo;
					r.material = material;
					r.scale.set( sc, sc, sc );
					r.position.y = -30;
					scene.add( r );  
				});
				loader.load("assets/gfx/models/pgx.HMesh.js", function(geo){
					h.geometry = geo;
					h.material = material;
					h.scale.set( sc, sc, sc );
					h.position.y = -30;
					scene.add( h );  
				});
				loader.load("assets/gfx/models/pgx.IMesh.js", function(geo){
					i.geometry = geo;
					i.material = material;
					i.scale.set( sc, sc, sc );
					i.position.y = -30;
					scene.add( i );  
				});
				loader.load("assets/gfx/models/pgx.XMesh.js", function(geo){
					x.geometry = geo;
					x.material = material;
					x.scale.set( sc, sc, sc );
					x.position.y = -30;
					scene.add( x );  
				});	

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				window.addEventListener( 'resize', onWindowResized, false );

				onWindowResized( null );

			}

			function onWindowResized( event ) {

				renderer.setSize( window.innerWidth/1.1, window.innerHeight/2 );
				camera.projectionMatrix.makePerspective( fov, window.innerWidth / window.innerHeight, 1, 1100 );
			}


			function onDocumentMouseMove( event ) {

								lon = ( event.clientX - window.innerWidth/8 );
				lat = ( event.clientY -window.innerHeight/8 );

			}



			function animate() {

				requestAnimationFrame( animate );
				render();

			}

			function render() {

				var time = Date.now()/10;

				lon += .15;

				lat = Math.max( - 85, Math.min( 85, lat ) );
				phi = THREE.Math.degToRad( 90 - lat );
				theta = THREE.Math.degToRad( lon );


				torus.position.x = Math.sin( time * 0.001 + 4 ) * 30;
				torus.position.y = Math.sin( time * 0.0011 + 4 ) * 30 -20;
				torus.position.z = Math.sin( time * 0.0012 + 4 ) * 30;

				torus.rotation.x += Math.PI/90;
				torus.rotation.y += Math.PI/90;

				p.position.x = Math.sin( time * 0.001  )*30-60;
				p.rotation.x += Math.PI/90;
				p.rotation.y += Math.PI/90;
				
				l.position.x = Math.sin( time * 0.001  ) * 30-30;
				l.rotation.x += Math.PI/90;
				l.rotation.y += Math.PI/90;

				a.position.x = Math.sin( time * 0.001   ) * 30;
				a.rotation.x += Math.PI/90;
				a.rotation.y += Math.PI/90;

				s.position.x = Math.sin( time * 0.001  ) * 30+30
				s.rotation.x += Math.PI/90;
				s.rotation.y += Math.PI/90;

				m.position.x = Math.sin( time * 0.001  ) * 30+60 ;
				m.rotation.x += Math.PI/90;
				m.rotation.y += Math.PI/90;

				a2.position.x = Math.sin( time * 0.001 ) *30+90;
				a2.rotation.x += Math.PI/90;
				a2.rotation.y += Math.PI/90;
				
				g.position.x = Math.sin( time * 0.001  ) * 30-30;
				g.rotation.x += Math.PI/90;
				g.rotation.y += Math.PI/90;

				r.position.x = Math.sin( time * 0.001  ) * 30;
				r.rotation.x += Math.PI/90;
				r.rotation.y += Math.PI/90;

				a3.position.x = Math.sin( time * 0.001 ) * 30+30;
				a3.rotation.x += Math.PI/90;
				a3.rotation.y += Math.PI/90;				
				
				p2.position.x = Math.sin( time * 0.001  ) * 30+60;
				p2.rotation.x += Math.PI/90;
				p2.rotation.y += Math.PI/90;

				h.position.x = Math.sin( time * 0.001  ) * 30+90;
				h.rotation.x += Math.PI/90;
				h.rotation.y += Math.PI/90;

				i.position.x = Math.sin( time * 0.001 ) *30+120;
				i.rotation.x += Math.PI/90;
				i.rotation.y += Math.PI/90;

				x.position.x = Math.sin( time * 0.001 ) *30+150;
				x.rotation.x += Math.PI/90;
				x.rotation.y += Math.PI/90;

				camera.position.x = 100 * Math.sin( phi ) * Math.cos( theta );
				camera.position.y = 100 * Math.cos( phi );
				camera.position.z = 100 * Math.sin( phi ) * Math.sin( theta );

				camera.lookAt( scene.position );


				cubeCamera.updateCubeMap( renderer, scene );

				renderer.render( scene, camera );

			}
