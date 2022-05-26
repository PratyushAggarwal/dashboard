import React from "react";

const Activity = () => {
  return (
    <div className="col-xl-3 col-lg-6 order-lg-1">
      <div className="card">
        <div className="card-body pb-0">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4 className="header-title">Recent Activity</h4>
          </div>
        </div>
        <div
          className="card-body py-0"
          data-simplebar="init"
          style={{ maxHeight: 405 }}
        >
          <div className="simplebar-wrapper" style={{ margin: "0px -24px" }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                <div
                  className="simplebar-content-wrapper"
                  tabIndex={0}
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "auto", overflow: "hidden scroll" }}
                >
                  <div
                    className="simplebar-content"
                    style={{ padding: "0px 24px" }}
                  >
                    <div className="timeline-alt py-0">
                      <div className="timeline-item">
                        <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon" />
                        <div className="timeline-item-info">
                          <a
                            href="/"
                            className="text-info fw-bold mb-1 d-block"
                          >
                            You sold an item
                          </a>
                          <small>
                            Paul Burgess just purchased “Hyper - Admin
                            Dashboard”!
                          </small>
                          <p className="mb-0 pb-2">
                            <small className="text-muted">5 minutes ago</small>
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon" />
                        <div className="timeline-item-info">
                          <a
                            href="/"
                            className="text-primary fw-bold mb-1 d-block"
                          >
                            Product on the Bootstrap Market
                          </a>
                          <small>
                            Dave Gamache added
                            <span className="fw-bold">Admin Dashboard</span>
                          </small>
                          <p className="mb-0 pb-2">
                            <small className="text-muted">30 minutes ago</small>
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon" />
                        <div className="timeline-item-info">
                          <a
                            href="/"
                            className="text-info fw-bold mb-1 d-block"
                          >
                            Robert Delaney
                          </a>
                          <small>
                            Send you message
                            <span className="fw-bold">"Are you there?"</span>
                          </small>
                          <p className="mb-0 pb-2">
                            <small className="text-muted">2 hours ago</small>
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon" />
                        <div className="timeline-item-info">
                          <a
                            href="/"
                            className="text-primary fw-bold mb-1 d-block"
                          >
                            Audrey Tobey
                          </a>
                          <small>
                            Uploaded a photo
                            <span className="fw-bold">"Error.jpg"</span>
                          </small>
                          <p className="mb-0 pb-2">
                            <small className="text-muted">14 hours ago</small>
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon" />
                        <div className="timeline-item-info">
                          <a
                            href="/"
                            className="text-info fw-bold mb-1 d-block"
                          >
                            You sold an item
                          </a>
                          <small>
                            Paul Burgess just purchased “Hyper - Admin
                            Dashboard”!
                          </small>
                          <p className="mb-0 pb-2">
                            <small className="text-muted">16 hours ago</small>
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon" />
                        <div className="timeline-item-info">
                          <a
                            href="/"
                            className="text-primary fw-bold mb-1 d-block"
                          >
                            Product on the Bootstrap Market
                          </a>
                          <small>
                            Dave Gamache added
                            <span className="fw-bold">Admin Dashboard</span>
                          </small>
                          <p className="mb-0 pb-2">
                            <small className="text-muted">22 hours ago</small>
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon" />
                        <div className="timeline-item-info">
                          <a
                            href="/"
                            className="text-info fw-bold mb-1 d-block"
                          >
                            Robert Delaney
                          </a>
                          <small>
                            Send you message
                            <span className="fw-bold">"Are you there?"</span>
                          </small>
                          <p className="mb-0 pb-2">
                            <small className="text-muted">2 days ago</small>
                          </p>
                        </div>
                      </div>
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
        </div>{" "}
        {/* end slimscroll */}
      </div>
    </div>
  );
};

export default Activity;
