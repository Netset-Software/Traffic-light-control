//
//  ViewController.swift
//  TrafficLight
//
//  Created by  Apple on 28/08/21.
//

import UIKit

class TrafficLightViewController: UIViewController { //TrafficLightPresenter {
    
    @IBOutlet weak var westLight: UIImageView!
    @IBOutlet weak var northLight: UIImageView!
    @IBOutlet weak var eastLight: UIImageView!
    @IBOutlet weak var southLight: UIImageView!
    @IBOutlet weak var elapsedTime: UILabel?
    
    var timer = Timer()
    var _store = 0
    
    override func viewDidLoad() {
        startTime()
        autoScroll()
    }
    func startTime() {
        timer = Timer.scheduledTimer(timeInterval: 20.0, target: self, selector: #selector(self.autoScroll), userInfo: nil, repeats: true)
    }
    //MARK: TimerMethod
    @objc func autoScroll() {
        if self._store == 0 {
            northLight.image = #imageLiteral(resourceName: "amber")
            southLight.image = #imageLiteral(resourceName: "red")
            westLight.image = #imageLiteral(resourceName: "red")
            eastLight.image = #imageLiteral(resourceName: "red")
            DispatchQueue.main.asyncAfter(deadline: .now() + 5) { //
                self.northLight.image = #imageLiteral(resourceName: "green")
            }
            self._store = 1
        } else if _store ==  1  {
            self.eastLight.image = #imageLiteral(resourceName: "amber")
            self.northLight.image = #imageLiteral(resourceName: "red")
            self.southLight.image = #imageLiteral(resourceName: "red")
            self.westLight.image = #imageLiteral(resourceName: "red")
            DispatchQueue.main.asyncAfter(deadline: .now() + 5) { //
                self.eastLight.image = #imageLiteral(resourceName: "green")
            }
            self._store = 2
        }
        else if _store ==  2  {
            northLight.image = #imageLiteral(resourceName: "red")
            eastLight.image = #imageLiteral(resourceName: "red")
            southLight.image = #imageLiteral(resourceName: "amber")
            westLight.image = #imageLiteral(resourceName: "red")
            DispatchQueue.main.asyncAfter(deadline: .now() + 5) { //
                self.southLight.image = #imageLiteral(resourceName: "green")
            }
            self._store = 3
        } else {
            northLight.image = #imageLiteral(resourceName: "red")
            eastLight.image = #imageLiteral(resourceName: "red")
            southLight.image = #imageLiteral(resourceName: "red")
            westLight.image = #imageLiteral(resourceName: "amber")
            
            DispatchQueue.main.asyncAfter(deadline: .now() + 5) { //
                self.westLight.image = #imageLiteral(resourceName: "green")
            }
            self._store = 0
        }
    }
    
}
    


