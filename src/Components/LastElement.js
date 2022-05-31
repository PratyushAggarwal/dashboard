import React from "react";
import { MdUpload, MdMic } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import Timeline from "./timeLine";
import Timeline2 from "./timeline2";

const Activity = () => {
  return (
    <div className="col-xl-3 col-lg-6 order-lg-1">
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
                        <Timeline
                          heading="You sold an item"
                          statement=" Paul Burgess just purchased “Hyper - Admin Dashboard”!"
                          time="5 minutes ago"
                          component={MdUpload}
                        />
                        <Timeline2
                          heading="Product on the Bootstrap Market"
                          statement="Dave Gamache added"
                          statement2=" Admin Dashboard"
                          time="30 minutes ago"
                          component={GiCommercialAirplane}
                        />
                        <Timeline
                          heading="Robert Delaney"
                          statement="Send you message"
                          statement2=" Are you there?"
                          time="2 hours ago"
                          component={MdMic}
                        />
                        <Timeline2
                          heading="Audrey Tobey"
                          statement="Uploaded a photo"
                          statement2=" Error.jpg"
                          time="14 hours ago"
                          component={MdUpload}
                        />
                        <Timeline
                          heading="You sold an item"
                          statement="Paul Burgess just purchased “Hyper - Admin
                          Dashboard”!"
                          statement2=""
                          time="16 hours ago"
                          component={MdUpload}
                        />
                        <Timeline2
                          heading="Product on the Bootstrap Market"
                          statement="Dave Gamache added"
                          statement2=" Admin Dashboard"
                          time="22 hours ago"
                          component={GiCommercialAirplane}
                        />
                        <Timeline
                          heading="Robert Delaney"
                          statement="Send you message"
                          statement2="Are you there?"
                          time="16 hours ago"
                          component={MdMic}
                        />
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
