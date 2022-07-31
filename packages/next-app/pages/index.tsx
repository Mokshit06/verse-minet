import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { useVisible } from '../components/app-store';
import { Dashboard } from '../components/dashboard';
import { Glasses } from '../components/glasses';

export default function Home() {
  const visible = useVisible();
  useEffect(() => {
    const listener = (e: any) => {
      if (e.key === '`') {
        visible.setVisible(
          useVisible.getState().visible === 'glasses' ? 'apps' : 'glasses'
        );
      }
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [visible]);

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ProperViewer />
      <Dashboard />
      <Glasses />
    </div>
  );
}

declare class Sketchfab {
  constructor(iframe: HTMLIFrameElement);
  init(uid: string, config: Record<string, any>): void;
}

function ProperViewer() {
  const ref = useRef<HTMLIFrameElement>(null);
  const client = useRef<Sketchfab>();

  useEffect(() => {
    client.current = new Sketchfab(ref.current!);

    console.log(client);

    client.current.init('7c61edc428a24b188633e526616a729c', {
      success(api: any) {
        api.start();
        api.addEventListener('viewerready', function () {
          // API is ready to use
          // Insert your code here
          console.log('Viewer is ready');
        });
      },
      animation_autoplay: 0,
      autostart: 1,
      annotation_tooltip_visible: 0,
      annotations_visible: 0,
      ui_stop: 0,
      navigation: 'fps',
    });
    return () => {};
  }, []);

  return (
    <div style={{ maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden' }}>
      <Script src="/sketchfab.js" strategy="beforeInteractive" />
      <iframe
        ref={ref}
        // hide controls and user avatar
        style={{ height: '115vh', width: '110vw', margin: '-7.5vh -5vw' }}
        src=""
        id="api-frame"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />
    </div>
  );
}

function ModelViewer() {
  return (
    <model-viewer
      style={{ height: '100vh', width: '100vw' }}
      alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
      src="/mystical_forest_cartoon/scene.gltf"
      ar
      ar-modes="webxr scene-viewer quick-look"
      // environment-image="shared-assets/environments/moon_1k.hdr"
      // poster="shared-assets/models/NeilArmstrong.webp"
      // seamless-poster
      shadow-intensity="1"
      camera-controls
      enable-pan
      camera-orbit="20deg 10deg 3m"
    />
  );
}
