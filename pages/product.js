import { Modal } from "@components/common";
import {
  ProductHero,
  Curriculum,
  Keypoints
} from "@components/product";

export default function Product() {

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <ProductHero />
      <Keypoints />
      <Curriculum />
      <Modal />
    </div>
  )
}
