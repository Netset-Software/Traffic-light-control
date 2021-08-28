//
//  ViewController.swift
//  trafficLight
//
//  Created by netset on 8/28/21.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var imgTopView: UIImageView!
    @IBOutlet weak var imgLeftView: UIImageView!
    @IBOutlet weak var imgRightView: UIImageView!
    @IBOutlet weak var imgBottomView: UIImageView!
    
    var runningLight = 0
    
    var myTimer:Timer?
    var firstTime = true
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        
        myTimer = Timer.scheduledTimer(timeInterval: 5, target: self, selector: #selector(runTimedCode), userInfo: nil, repeats: true)
        // Do any additional setup after loading the view.
    }
    
    @objc func runTimedCode() {
        
        if self.runningLight == 0 {
            print("0")
           // self.imgBottomView.image = #imageLiteral(resourceName: "amber")
            
            if self.firstTime  == true {
                self.imgTopView.image = #imageLiteral(resourceName: "amber")
                DispatchQueue.main.asyncAfter(deadline: .now() + 2) { //
                
                self.imgTopView.image = #imageLiteral(resourceName: "green")
                self.imgLeftView.image = #imageLiteral(resourceName: "red")
                self.imgRightView.image = #imageLiteral(resourceName: "red")
                self.imgBottomView.image = #imageLiteral(resourceName: "red")
                }
            } else {
                self.imgTopView.image = #imageLiteral(resourceName: "amber")
                self.imgBottomView.image = #imageLiteral(resourceName: "amber")
                
                DispatchQueue.main.asyncAfter(deadline: .now() + 2) { //
                
                self.imgTopView.image = #imageLiteral(resourceName: "green")
                self.imgLeftView.image = #imageLiteral(resourceName: "red")
                self.imgRightView.image = #imageLiteral(resourceName: "red")
                self.imgBottomView.image = #imageLiteral(resourceName: "red")
                }
            }
           
            
          
            self.runningLight = 1
            
        } else if self.runningLight == 1 {
            print("1")
           
            self.imgLeftView.image = #imageLiteral(resourceName: "amber")
            self.imgTopView.image = #imageLiteral(resourceName: "amber")
            DispatchQueue.main.asyncAfter(deadline: .now() + 2) { //
                
            self.imgTopView.image = #imageLiteral(resourceName: "red")
            self.imgLeftView.image = #imageLiteral(resourceName: "green")
            self.imgRightView.image = #imageLiteral(resourceName: "red")
            self.imgBottomView.image = #imageLiteral(resourceName: "red")
            }
            self.runningLight = 2
            
        } else if self.runningLight == 2 {
            
            print("2")
            self.imgLeftView.image = #imageLiteral(resourceName: "amber")
            self.imgRightView.image = #imageLiteral(resourceName: "amber")
            DispatchQueue.main.asyncAfter(deadline: .now() + 2) { //
            self.imgTopView.image = #imageLiteral(resourceName: "red")
            self.imgLeftView.image = #imageLiteral(resourceName: "red")
            self.imgRightView.image = #imageLiteral(resourceName: "green")
            self.imgBottomView.image = #imageLiteral(resourceName: "red")
            }
            self.runningLight = 3
            
        } else if self.runningLight == 3 {
            self.firstTime = false
            print("3")
            self.imgRightView.image = #imageLiteral(resourceName: "amber")
            self.imgBottomView.image = #imageLiteral(resourceName: "amber")
            DispatchQueue.main.asyncAfter(deadline: .now() + 2) { //
            self.imgTopView.image = #imageLiteral(resourceName: "red")
            self.imgLeftView.image = #imageLiteral(resourceName: "red")
            self.imgRightView.image = #imageLiteral(resourceName: "red")
            self.imgBottomView.image = #imageLiteral(resourceName: "green")
            }
            self.runningLight = 0
            
        }
        
        
    }
   
}

