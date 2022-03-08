import { BaseLayout } from "@components/layout";
import { Modal } from "@components/common";
import {
  ProductHero,
  Curriculum,
  Keypoints
} from "@components/product";

export default function Product() {

  return (
      <>
        <div className="py-4">
          <ProductHero />
        </div>
        <Keypoints />
        <Curriculum />
        <Modal />
      </>
  )
}

Product.Layout = BaseLayout