import React from "react";
import { MdUpload, MdMic } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import Timeline from "./timeLine";
import Timeline2 from "./timeline2";
import datas from "./data/activity.json"

const Activity = () => {
  var index=0;
  const iconDetails = {upload : MdUpload, airplane: GiCommercialAirplane, mic: MdMic};
  const timeline = datas.map(data => <Timeline heading={data.heading} statement={data.statement} statement2={data.statement2} time={data.time} component={iconDetails[data.icon]}/>)

  return (
    <div className="col-xl-3 col-lg-6 order-lg-1">
      {console.log(iconDetails[datas[0].icon])}
      <div className="card">
        <div className="card-body pb-0">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4 className="header-title">Recent Activity</h4>
          </div>
          <div
            className="py-0"
            data-simplebar="init"
            style={{ maxHeight: 405 }}
          >
            <div className="simplebar-wrapper" style={{ margin: "0px -24px" }}>
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
              </div>
              <div className="simplebar-mask">
                <div
                  className="simplebar-offset"
                  style={{ right: 0, bottom: 0 }}
                >
                  <div
                    className="simplebar-content-wrapper"
                    tabIndex={0}
                    role="region"
                    aria-label="scrollable content"
                    style={{ height: "auto", overflow: "hidden scroll" }}
                  >
                    <div
                      className="simplebar-content"
                      style={{ padding: "0px 0px" }}
                    >
                      <div className="timeline-alt py-0">
                        {timeline}
                      </div>
                      {/* end timeline */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="simplebar-placeholder"
                style={{ width: "auto", height: 580 }}
              />
            </div>
            <div
              className="simplebar-track simplebar-horizontal"
              style={{ visibility: "hidden" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{ width: 0, display: "none" }}
              />
            </div>
            <div
              className="simplebar-track simplebar-vertical"
              style={{ visibility: "visible" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{
                  height: 282,
                  transform: "translate3d(0px, 0px, 0px)",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
