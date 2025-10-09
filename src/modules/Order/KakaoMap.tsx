import { useEffect, useRef, useState } from 'react';

type KakaoMapProps = {
  latitude?: number;
  longitude?: number;
  address?: string;
  level?: number;
  className?: string;
  markerTitle?: string;
};

const loadKakaoSdk = (): Promise<void> => {
  const existing = document.getElementById('kakao-sdk');
  if (existing) return Promise.resolve();

  const appKey = import.meta.env.VITE_KAKAOMAP_APP_KEY as string | undefined;
  if (!appKey) {
    // Fail early to help developers notice missing key in .env
    return Promise.reject(
      new Error('VITE_KAKAOMAP_APP_KEY가 설정되지 않았습니다.')
    );
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = 'kakao-sdk';
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false&libraries=services`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Kakao Maps SDK 로딩 실패'));
    document.head.appendChild(script);
  });
};

const KakaoMap = ({
  latitude,
  longitude,
  address,
  level = 3,
  className,
  markerTitle,
}: KakaoMapProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const initialize = async () => {
      try {
        await loadKakaoSdk();

        if (!('kakao' in window) || !kakao?.maps) {
          throw new Error('kakao.maps가 존재하지 않습니다.');
        }

        await new Promise<void>((res) => kakao.maps.load(() => res()));

        if (cancelled || !containerRef.current) return;

        const center = (() => {
          if (latitude != null && longitude != null) {
            return new kakao.maps.LatLng(latitude, longitude);
          }
          // 기본: 서울 시청
          return new kakao.maps.LatLng(37.5665, 126.978);
        })();

        const map = new kakao.maps.Map(containerRef.current, {
          center,
          level,
        });

        const addMarker = (position: kakao.maps.LatLng) => {
          const marker = new kakao.maps.Marker({
            position,
          });
          marker.setMap(map);
          if (markerTitle) {
            const iw = new kakao.maps.InfoWindow({
              content: `<div style="padding:6px 8px; font-size:12px;">${markerTitle}</div>`,
            });
            iw.open(map, marker);
          }
          map.setCenter(position);
        };

        if (address) {
          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.addressSearch(address, (result, status) => {
            if (cancelled) return;
            if (status === kakao.maps.services.Status.OK && result?.[0]) {
              const { y, x } = result[0];
              const pos = new kakao.maps.LatLng(Number(y), Number(x));
              addMarker(pos);
            }
          });
        } else if (latitude != null && longitude != null) {
          addMarker(new kakao.maps.LatLng(latitude, longitude));
        }
      } catch (e: unknown) {
        if (!cancelled) {
          const message =
            e instanceof Error
              ? e.message
              : '지도를 불러오는 중 오류가 발생했습니다.';
          setLoadError(message);
        }
      }
    };

    initialize();
    return () => {
      cancelled = true;
    };
  }, [latitude, longitude, address, level, markerTitle]);

  return (
    <div className={className}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '240px',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      />
      {loadError && (
        <div className="mt-2 text-[12px] text-[#D80023]">{loadError}</div>
      )}
    </div>
  );
};

export default KakaoMap;
