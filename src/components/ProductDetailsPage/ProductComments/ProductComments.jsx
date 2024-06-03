import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

import ProductCommentBox from "../ProductCommentBox/ProductCommentBox";
import useGetProductComments from "../../../hooks/useGetProductComments";

function ProductComments(props) {
  const [sectionTitle, setSectionTitle] = useState("desc");
  const { data: productComments } = useGetProductComments(props.id);

  return (
    <section>
      <div className="px-4 xs:px-24 mb-16">
        <div className="border py-6 px-4 md:px-8">
          <div className="border-b pb-5 flex flex-wrap gap-6 gap-y-2 md:gap-8 text-lg md:text-xl text-gray-700 [&>*]:cursor-pointer [&>*:hover]:text-gray-900 [&>*:hover]:transition">
            <h1
              className={`${sectionTitle === "desc" && "text-black"}`}
              onClick={() => setSectionTitle("desc")}
            >
              توضیحات
            </h1>
            <h1
              className={`${sectionTitle === "infos" && "text-black"}`}
              onClick={() => setSectionTitle("infos")}
            >
              مشخصات فنی
            </h1>
            <h1
              className={`${sectionTitle === "comments" && "text-black"}`}
              onClick={() => setSectionTitle("comments")}
            >
              نقد و بررسی (
              {productComments?.length
                ? productComments.length.toLocaleString("fa")
                : "۰"}
              )
            </h1>
          </div>
          <div className="pt-8">
            {sectionTitle === "desc" && (
              <p className="text-[15px] leading-7">{props.desc}</p>
            )}

            {sectionTitle === "infos" && (
              <div>
                <table className="w-full [&_td]:p-2 [&_td]:border-y text-[15px] mb-6">
                  <tr>
                    <td className="border-l w-1/3">جنس</td>
                    <td className="border-y">پلی استر</td>
                  </tr>
                  <tr>
                    <td className="border-l w-1/3">سبک ها</td>
                    <td className="border-y">دخترانه</td>
                  </tr>
                  <tr>
                    <td className="border-l w-1/3">خصوصیات</td>
                    <td className="border-y">پیراهن کوتاه</td>
                  </tr>
                </table>
                <p className="text-[15px] leading-7">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و
                </p>
              </div>
            )}

            {sectionTitle === "comments" && (
              <div>
                <div className="mb-8">
                  {!productComments?.length ? (
                    <h1 className="text-[17px] md:text-xl font-IRANSans tracking-tighter mb-6">
                      هیچ نقد و بررسی برای این محصول ثبت نشده است
                    </h1>
                  ) : (
                    <>
                      <h1 className="text-[17px] md:text-xl font-IRANSans tracking-tighter mb-6">
                        {productComments.length.toLocaleString("fa")} نقد و
                        بررسی برای این محصول
                      </h1>
                      <div className="space-y-6">
                        {productComments.map((comment) => (
                          <ProductCommentBox key={comment.id} {...comment} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div>
                  <h1 className="text-[17px] md:text-xl font-IRANSans tracking-tighter mb-6">
                    یک نقد و بررسی بنویسید
                  </h1>
                  <div className="space-y-5">
                    <p>
                      ایمیل شما منتشر نخواهد شد. فیلد های الزامی مشخص شده اند
                    </p>
                    <div>
                      <h2>امتیاز شما</h2>
                      <div className="text-primaryBlue mt-2 ">
                        <StarIcon fontSize="" />
                        <StarIcon fontSize="" />
                        <StarIcon fontSize="" />
                        <StarIcon fontSize="" />
                        <StarIcon fontSize="" />
                      </div>
                    </div>
                    <form className="[&_label]:mb-2">
                      <div>
                        <label htmlFor="comment" className="block">
                          نقد و بررسی شما
                        </label>
                        <textarea
                          name=""
                          id="comment"
                          rows="6"
                          className="border w-full text-sm p-2 resize-none focus:outline-none"
                        ></textarea>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-2 md:mt-4">
                        <div>
                          <label htmlFor="name" className="block">
                            نام
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="border w-full text-sm p-2 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block">
                            ایمیل
                          </label>
                          <input
                            type="text"
                            id="email"
                            className="border w-full text-sm p-2 focus:outline-none"
                          />
                        </div>
                      </div>
                      <input
                        type="submit"
                        value="ثبت"
                        className="text-white bg-zinc-800 px-4 py-2 rounded-md text-sm mt-4 cursor-pointer transition duration-300 hover:bg-primaryBlue"
                      />
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductComments;
