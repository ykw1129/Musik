import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { getBanner } from '../../api/resource/home';
import { BannerType } from '../types';
import { Link } from 'react-router-dom';
const Index = () => {
  const [banners, setBanners] = useState<BannerType[] | undefined>()
  useEffect(() => {
    const fetchData = async () => {
      const res = await getBanner()
      if (res.code === 200) {
        setBanners(res.banners)
      }
    }
    fetchData()
  }, [])
  return (
    <Carousel autoPlay>
      {
        banners?.map((banner: BannerType) =>
          <Link key={banner.targetId} to={`/category/${banner.targetId}`} className="block">
            <img src={banner.imageUrl} alt={banner.typeTitle} />
          </Link>
        )
      }
    </Carousel >
  );
}

export default Index;
