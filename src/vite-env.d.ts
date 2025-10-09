/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// Kakao Maps minimal type declarations used in the app
declare namespace kakao {
  namespace maps {
    class LatLng {
      constructor(latitude: number, longitude: number);
    }
    class Map {
      constructor(
        container: HTMLElement,
        options: { center: LatLng; level: number }
      );
      setCenter(latlng: LatLng): void;
    }
    class Marker {
      constructor(options: { position: LatLng });
      setMap(map: Map | null): void;
    }
    class InfoWindow {
      constructor(options: { content: string });
      open(map: Map, marker: Marker): void;
    }
    function load(callback: () => void): void;
    namespace services {
      type AddressResult = { x: string; y: string } & Record<string, unknown>;
      class Geocoder {
        addressSearch(
          query: string,
          callback: (result: AddressResult[], status: Status) => void
        ): void;
      }
      enum Status {
        OK = 'OK',
      }
    }
  }
}

declare const kakao: typeof kakao;
