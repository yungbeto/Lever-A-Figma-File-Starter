figma.showUI(__html__, { width: 560, height: 208 });

figma.ui.onmessage = async msg => {

  if (msg.type === "create-cover") {

    // Create pages
    let linePage = figma.createPage();
    let workInProgressPage = figma.createPage();
    let archivePage = figma.createPage();
    let coverPage = figma.createPage();

    //Create Cover Page
    let coverFrame = figma.createFrame();
    coverFrame.name = 'Cover Thumbnail';
    coverPage.appendChild(coverFrame);
    coverFrame.resize(1240, 640);
    coverFrame.fills = [{ type: "SOLID", color: { r: 0 / 255, g: 185 / 255, b: 242 / 255 } }];

    // Set page names and renames the default "Page 1"
    figma.currentPage.name = "✅ - Dev Ready [DO NOT EDIT]";
    linePage.name = "__________________________";
    workInProgressPage.name = "🚧 - Work In Progress";
    archivePage.name = "🗑 - Archive";
    coverPage.name = "🖼 - Cover";

    //Create cover title
    let coverTitle = figma.createText();
    coverFrame.appendChild(coverTitle);

    // Set covert title style
    let loadCoverTitle = async () => {
      await figma.loadFontAsync({ family: "Work Sans", style: "Bold" });
      coverTitle.fontName = { family: "Work Sans", style: "Bold" };
      coverTitle.characters = msg.message;
      coverTitle.fills = [{ type: 'SOLID', color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 } }]
      coverTitle.x = 104;
      coverTitle.y = 0;
      coverTitle.fontSize = 80;
      coverTitle.resize(1048, 560);
      coverTitle.textAlignHorizontal = 'LEFT';
      coverTitle.textAlignVertical = 'BOTTOM';
      coverTitle.textAutoResize = "HEIGHT";
    }

    let run = async () => {
      await loadCoverTitle();
      figma.notify("🎉 Revel template created! Now make something beautiful ✨");
      figma.closePlugin();
    }

    run();
  }
}