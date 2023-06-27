import { Button, Modal } from "antd";
import { useState } from "react";
import image1 from "@/assets/img/svg/adobe-illustrator.svg";
import image2 from "@/assets/img/svg/camera-diaphragm.svg";
import image3 from "@/assets/img/svg/layers.svg";
import image4 from "@/assets/img/svg/new-tab.svg";
import image5 from "@/assets/img/svg/seo-performance-marketing-graphic.svg";
import image6 from "@/assets/img/svg/share.svg";

import { IoLogoReact } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

interface IProject {
  image: JSX.Element;
  title: string;
  sortDescription: string;
  detail: {
    description: string;
    frontend: string;
    backend: string;
    member: number;
    role: string;
    demo: string;
    github: string;
  };
}
const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };
  const dataProjects: IProject[] = [
    {
      image: <IoLogoReact size={50} color={"#2bebfd"} />,
      title: "Website clone shopee 1",
      sortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "(self-learning) xây dựng website thương mại điện tử clone shopee",
        frontend: "ReactJS (Typescript), Redux Toolkit",
        backend: "NodeJS (Typescript), MongoDB, Mysql",
        member: 1,
        role: "Developer",
        demo: "github.com/hoanganndev",
        github: "github.com/hoanganndev",
      },
    },
    {
      image: <IoLogoReact size={50} color={"#2bebfd"} />,
      title: "Website clone shopee 2",
      sortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "(self-learning) xây dựng website thương mại điện tử clone shopee",
        frontend: "ReactJS (Typescript), Redux Toolkit",
        backend: "NodeJS (Typescript), MongoDB, Mysql",
        member: 2,
        role: "Developer",
        demo: "github.com/hoanganndev",
        github: "github.com/hoanganndev",
      },
    },
    {
      image: <IoLogoReact size={50} color={"#2bebfd"} />,
      title: "Website clone shopee 3",
      sortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "(self-learning) xây dựng website thương mại điện tử clone shopee",
        frontend: "ReactJS (Typescript), Redux Toolkit",
        backend: "NodeJS (Typescript), MongoDB, Mysql",
        member: 3,
        role: "Developer",
        demo: "github.com/hoanganndev",
        github: "github.com/hoanganndev",
      },
    },
    {
      image: <IoLogoReact size={50} color={"#2bebfd"} />,
      title: "Website clone shopee 4",
      sortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "(self-learning) xây dựng website thương mại điện tử clone shopee",
        frontend: "ReactJS (Typescript), Redux Toolkit",
        backend: "NodeJS (Typescript), MongoDB, Mysql",
        member: 4,
        role: "Developer",
        demo: "github.com/hoanganndev",
        github: "github.com/hoanganndev",
      },
    },
    {
      image: <IoLogoReact size={50} color={"#2bebfd"} />,
      title: "Website clone shopee 5",
      sortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "(self-learning) xây dựng website thương mại điện tử clone shopee",
        frontend: "ReactJS (Typescript), Redux Toolkit",
        backend: "NodeJS (Typescript), MongoDB, Mysql",
        member: 5,
        role: "Developer",
        demo: "github.com/hoanganndev",
        github: "github.com/hoanganndev",
      },
    },
    {
      image: <IoLogoReact size={50} color={"#2bebfd"} />,
      title: "Website clone shopee 6",
      sortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "(self-learning) xây dựng website thương mại điện tử clone shopee",
        frontend: "ReactJS (Typescript), Redux Toolkit",
        backend: "NodeJS (Typescript), MongoDB, Mysql",
        member: 6,
        role: "Developer",
        demo: "github.com/hoanganndev",
        github: "github.com/hoanganndev",
      },
    },
  ];
  return (
    <>
      <Modal
        title={dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ""}
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
        footer={null}
        maskClosable={false}
      >
        <ul>
          <li>Miêu tả: {dataDetail?.detail.description}</li>
          <li>Front-end: {dataDetail?.detail.frontend}</li>
          <li>Back-end: {dataDetail?.detail.backend}</li>
          <li>Số lượng thành viên trong dự án: {dataDetail?.detail.member}</li>
          <li>Vai trò: {dataDetail?.detail.role}</li>
        </ul>
      </Modal>
      <div className="arlo_tm_section" id="services">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Các dự án đã hoàn thiện</h3>
              <span>Meet our amazing services</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((project, index) => {
                  return (
                    <li key={`${index}-project`}>
                      <div
                        className="inner"
                        title="xem chi tiết"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setDataDetail(project);
                          setIsModalOpen(true);
                        }}
                      >
                        <div className="icon">{project.image}</div>
                        <div className="title_service">
                          <h3>{project.title}</h3>
                        </div>
                        <div className="text">
                          <p>{project.sortDescription}</p>
                        </div>
                        <div className="view_detail" style={{ padding: "5px 0" }}>
                          <span style={{ cursor: "pointer" }}>
                            <BsArrowRight />
                            &nbsp; Xem chi tiết
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
