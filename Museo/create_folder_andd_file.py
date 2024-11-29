import os
import shutil

for i in range(3,15):
    path = os.path.join("d:/GitRepository/CalaHub.github.io/CalaHub.github.io/Museo/","vetrina"+str(i))
    # print(path,"\n")
    os.mkdir(path)
    shutil.copy("d:/GitRepository/CalaHub.github.io/CalaHub.github.io/Museo/vetrina2/info_vetrina_2.html","d:/GitRepository/CalaHub.github.io/CalaHub.github.io/Museo/vetrina"+str(i)+"/info_vetrina_"+str(i)+".html")
    shutil.copy("d:/GitRepository/CalaHub.github.io/CalaHub.github.io/Museo/vetrina2/strumento_46.html","d:/GitRepository/CalaHub.github.io/CalaHub.github.io/Museo/vetrina"+str(i)+"/strumento_XX.html")

