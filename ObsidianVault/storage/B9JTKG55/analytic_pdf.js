"use strict";

var pdfLinks = document.querySelectorAll(".download_pdf");
var reportLinks = document.querySelectorAll(".report-download");
var reportSideLinks = document.querySelectorAll(".download_report_pdf");

function handlePdfClick(event) {
  var parentElement = event.target.offsetParent;
  var hrefArray = parentElement.href.split("/");
  var pdfName = hrefArray[hrefArray.length - 1];

  if (parentElement.classList.contains("download_pdf")) {
    ga("send", "event", {
      eventCategory: "Download article as .pdf file",
      eventAction: "click",
      eventLabel: "PDF: " + pdfName
    });
  }
}

function handleReportPdfClick(event) {
  if (this.classList.contains("download_report_pdf")) {
    reportName = this.dataset.title;
  } else if (this.classList.contains("report-download")) {
    reportName = this.innerText;
  }

  ga("send", "event", {
    eventCategory: "Download report as .pdf file",
    eventAction: "click",
    eventLabel: "PDF: " + reportName
  });
}

pdfLinks.forEach(function (link) {
  return link.addEventListener("click", handlePdfClick, false);
});
reportLinks.forEach(function (link) {
  return link.addEventListener("click", handleReportPdfClick, false);
});
reportSideLinks.forEach(function (link) {
  return link.addEventListener("click", handleReportPdfClick, false);
});
